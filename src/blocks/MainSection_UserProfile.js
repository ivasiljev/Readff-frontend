import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from '../css/blocks/MainSection_UserProfile.module.css';

import { editProfile, getUser } from '../services/UserService';

const updateUser = (event, keycloak, userInfo) => {
    const debug=true
    if (debug) event.preventDefault()

    editProfile(keycloak, userInfo)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const deleteProtection = (_user, name) => {
    if (_user.userInfo.attributes?.privateFields) {
        const index = _user.userInfo.attributes.privateFields.indexOf(name)
        if (index != -1) _user.userInfo.attributes.privateFields.splice(index, 1)
    }
    if (_user.userInfo.attributes?.friendsOnlyFields) {
        const index = _user.userInfo.attributes?.friendsOnlyFields.indexOf(name)
        if (index != -1) _user.userInfo.attributes?.friendsOnlyFields.splice(index, 1)
    }
}

const protectionChanged = (e, user, setUser, name) => {
    const _user = user

    deleteProtection(_user, name)
    if (e.target.value === 'private') {
        if (!_user.userInfo.attributes?.privateFields)
            _user.userInfo.attributes.privateFields = []
        _user.userInfo.attributes.privateFields.push(name)
    }
    if (e.target.value === 'friends') {
        if (!_user.userInfo.attributes?.friendsOnlyFields)
            _user.userInfo.attributes.friendsOnlyFields = []
        _user.userInfo.attributes.friendsOnlyFields.push(name)
    }
    setUser(_user)
}

const fieldChanged = (e, user, setUser, fieldName) => {
    const _user = user
    const parsedField = fieldName.split(".");

    if (parsedField.length === 1) _user.userInfo[parsedField[0]] = e.target.value 
    else if (parsedField.length === 2) _user.userInfo[parsedField[0]][parsedField[1]] = e.target.value
    else console.warn('Something went wrong !!!! You try to access field that lay to deep in hierarhy!')
    
    setUser(_user)
}

const editClicked = (edit, setEdit, editTarget) => {
    if (!edit.includes(editTarget))
        setEdit([...edit, editTarget])
}

const cancelEditClicked = (edit, setEdit, editTarget) => {
    if (edit.includes(editTarget)) {
        const _edit = edit
        const index = _edit.indexOf(editTarget);
        if (index > -1) {
            _edit.splice(index, 1);
        }
        setEdit([..._edit])
    }
}

const logout = (keycloak) => {
    keycloak.logout()
}

const debugBtn = (keycloak) => {
    console.log('debug button')
}

const security = (keycloak) => {
    keycloak.accountManagement()
}

const Frame = (props) => (
    <div className='mb-4 p-4 pe-0 pb-0 border border-secondary rounded'>
        <p className='mb-4 h3'>{props.title}</p>
        {props.children}
    </div>)

const Field = (props) => {
    const clickHandle = props.edit && !props.edit.includes(props.name) ? () => editClicked(props.edit, props.setEdit, props.name) : ()=>{};
    return (
        <div className='m-0 p-0 position-relative'>
            <div className={`row m-0 pt-3 pb-2 border-top border-secondary ${props.className} ${styles.field}`} onClick={clickHandle}>
                <p className='col-3 m-0 my-3 p-0 h5 text-muted'>{props.valueType}</p>
                <div className='row col-6 m-0 p-0 justify-content-md-center'>
                    <FieldValue {...props} />
                </div>
            </div>
            {props.children}
        </div>)
}

/**
 * 
 * @param {edit}    props.edit      
 * @returns 
 */
const FieldValue = (props) => {
    if (props.edit && props.edit.includes(props.name)) 
        return <Edit {...props} />
    else
        return <Value {...props} />
}

/**
 * String or link to show to user
 * @param {boolean} props.isLink    If true then present value as a link else as a plain text
 * @param {String}  props.value     Value presented out (if isLink then it is both a path and a value to show)
 * @returns Styled string or link
 */
const Value = (props) => {
    if (props.isLink)
        return <a className={`my-3 text-truncate h5`} href={props.value}>{props.value}</a>
    return <p className={`m-0 my-3 text-truncate h5`}>{props.value}</p>
}

const Edit = (props) => (
    <div className='my-auto'>
        <div className='row m-0 p-0'>
            <input className='col form-control' defaultValue={props.value} onChange={(e) => fieldChanged(e, props.user, props.setUser, props.name)} required/>
            <button className='col-auto btn btn-outline-secondary' onClick={() => cancelEditClicked(props.edit, props.setEdit, props.name)}>{'X'}</button>
            <div className="invalid-feedback">This field cannot be empty.</div>
        </div>
    </div>
)

/**
 * It is a dropdown list which allow user to choose protection
 * Dropdown values:
 *      'public': Public,
 *      'private': Private,
 *      'friends': Friends
 * @param {user}            props.user      User's profile info
 * @param {setUser}         props.setUser   Method to change user's profile info
 * @param {String}          props.name      Name of user's profile info property which protection is changeing
 * @param {List<String>}    props.edit      List of fields that are in change mode right now
 * 
 * @returns Dropdown list if current field is not in edit mode. Else returns empty element(<></>)
 */
const Protection = (props) => {
    const privateFields = props.user.userInfo.attributes?.privateFields
    let value = privateFields? privateFields.indexOf(props.name) != -1 && 'private':'public'
    if (!props.edit.includes(props.name))
    return (<div className='row m-0 border-top h-100 w-25 border-secondary position-absolute top-0 end-0'>
        <select className='col mt-4 mb-3 me-2 btn btn-outline-info' defaultValue={value} onChange={(e) => protectionChanged(e, props.user, props.setUser, props.name)}>
            <option value='public'>Public</option>
            <option value='private'>Private</option>
            <option value='friends'>Friends</option>
        </select>
    </div>)
    else return <></>
}

/**
 * Picture component
 * @param {String}  props.src       Path to picture
 * @param {boolean} props.editable  If true allow to edit picture and apply edit styles
 * @returns Styled picture component
 */
const Picture = (props) => (
    <div className={`${styles.avatarWrapper}`}>
        {props.editable && 
        <div className={`rounded-circle ${styles.avatarOverlay}`}>
            <div className={`${styles.editLabel} ${styles.fadeInButtom}`}>Edit</div>
        </div>}
        <img className={`rounded-circle ${styles.avatar}`} src={props.src} alt='avatar'></img>
    </div>
)

/**
 * Section with picture
 * @param {String}  props.src       Path to picture
 * @param {boolean} props.editable  If true allow to edit picture and apply edit styles
 * @returns Styled section with picture
 */
const PictureSection = (props) => (
    <div className={`row m-0 mb-4 pt-4 pb-0 border-top border-secondary align-items-center`}>
        <p className='col-3 p-0 m-0 h5 text-muted'>Photo</p>
        <div className='col-9 d-flex align-items-center'>
            <Picture src={props.picture} editable={props.editable} />
            <span className='col-7 p-0 m-0 ms-3 h6 fw-normal'>A profile picture helps people to recognize you</span> 
        </div>
    </div>
)

export const AnotherUserProfile = ({ username }) => {
    const [ user, setUser ] = useState({ userInfo: {}, initialized: false })
    console.log(user)
    useEffect(() =>{
        if (!user.initialized)
            getUser(username, 'dasd')
                .then(response => setUser({ userInfo: response.data, initialized: true }))
                .catch(error => console.error(error))
    }, [])
            

    return (
    <div className='m-3'>
        <h2 className='mb-4 text-center'>User info</h2>
        <Frame title='Profile Picture'>
            <PictureSection editable={false} />
        </Frame>

        <Frame title="Basic Info">
            <Field valueType='Username' value={user.userInfo.username} />

            <Field valueType='Public Name' value={`${user.userInfo.firstName} ${user.userInfo.lastName}`} />

            {user.userInfo.firstName &&
            <Field valueType='First Name' value={user.userInfo.firstName} />}

            {user.userInfo.lastName &&
            <Field valueType='Last Name' value={user.userInfo.lastName}/>}
        </Frame>

        <Frame title='Contact Info'>
            {user.userInfo.attributes?.phone &&
            <Field valueType='Phone number' value={user.userInfo.attributes?.phone} />}

            {user.userInfo.email &&
            <Field valueType='Email' value={user.userInfo.email} />}

            {user.userInfo.attributes?.authurl && <Field valueType='Site' value={user.userInfo.attributes.authurl} />}
        </Frame>
    </div>
    )
}

export const MainSection_UserProfile = () => {
    const { keycloak, initialized } = useKeycloak()
    const [ user, setUser ] = useState({userInfo: {}, initialized: false})
    const [ edit, setEdit ] = useState([])

    const isLoggedIn = keycloak.authenticated

    if (isLoggedIn && !user.initialized) {
        if (!keycloak.profile)
            useEffect(() => {
                keycloak.loadUserProfile()
                    .then(u => setUser({userInfo: u, initialized: true}))
                    .catch(e => console.error(e))
            }, [])
        else 
            setUser({userInfo: keycloak.profile, initialized: true})
    }

    function EditableField(props) {
        return <Field {...props} className={styles.editable} edit={edit} setEdit={setEdit} user={user} setUser={setUser} />
    }

    return (
    <form className='m-3 was-validated' onSubmit={(e) => updateUser(e, keycloak, user.userInfo)} noValidate>
        <h2 className='mb-4 text-center'>Personal info</h2>
        <Frame title='Profile Picture'>
            <PictureSection picture={user.userInfo.attributes?.picture} editable={true} />
        </Frame>

        <Frame title="Basic Info">
            <Field valueType='Username' value={user.userInfo.username} />

            <Field valueType='Public Name' value={`${user.userInfo.firstName} ${user.userInfo.lastName}`} />

            <EditableField valueType='First Name' value={user.userInfo.firstName} name='firstName' >
                <Protection edit={edit} user={user} setUser={setUser} name='firstName' />
            </EditableField>

            <EditableField valueType='Last Name' value={user.userInfo.lastName} name='lastName' >
                <Protection edit={edit} user={user} setUser={setUser} name='lastName' />
            </EditableField>
        </Frame>

        <Frame title='Contact Info'>
            <EditableField valueType='Phone number' value={user.userInfo.attributes?.phone} name='attributes.phone' >
                <Protection edit={edit} user={user} setUser={setUser} name='attributes.phone' />
            </EditableField>

            <EditableField valueType='Email' value={user.userInfo.email} name='email' >
                <Protection edit={edit} user={user} setUser={setUser} name='email' />
            </EditableField>

            {user.userInfo.attributes?.authurl && <Field valueType='Site' value={user.userInfo.attributes.authurl} />}

            {/* <Field className={styles.editable} valueType='Site' >
                <Value className='h6 fw-normal' value='Add new website' />
            </Field> */}
        </Frame>

        <Frame title='Security Settings'>
            <div className='row m-0 mb-4 pt-4 border-top border-secondary'>
                <div className='col-3 p-0 m-0'>
                    <button type='button' className='btn btn-block btn-danger h-100' onClick={() => security(keycloak)}>Security</button>
                </div>
                <p className='col-9 m-0 my-auto p-0'>Here you can change your password, linked accounts and other private information</p>
            </div>
        </Frame>

        <button type='submit' className='btn btn-primary col-2'>Save</button>
        <button type='button' className='ms-5 btn btn-primary col-2' onClick={() => debugBtn(keycloak)}>Debug</button>
        <div className='mt-4'>
            <button type='button' className='btn btn-success col-2' onClick={() => logout(keycloak)}>Logout</button>
        </div>
    </form>)
}