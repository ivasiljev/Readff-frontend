import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../css/blocks/LeftSideProfile.module.css';

import { ProfileLinks } from '../components/ProfileNavigation';
import { LoginForm } from './LoginForm';
import { useKeycloak } from '@react-keycloak/web';

const UserProfileInfo = props => {
    const userInfo = props.user;

    return (
    <div className='d-flex flex-row m-4' {...props}>
        <NavLink className={`p-0`} to='/:id'>
            <img className={`img-fluid ${styles.avatar}`} src={userInfo.attributes?.picture} alt='avatar'></img>
        </NavLink>
        <div className='ms-3'>
            <h4 className='m-0 mt-2'>{`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <NavLink className={`h6 text-muted`} to='/:id'><small>{userInfo.username}</small></NavLink>
        </div>
    </div>)
}

const Auth = (props) => {
    return (
    <div className='row justify-content-center'>
        <button type="button" className='col-7 btn btn-primary mt-5' onClick={() => props.keycloak.login()}>Log in</button>
        <button type="button" className='col-7 btn btn-primary mt-4' onClick={() => props.keycloak.register()}>Sign up</button>
    </div>)
}

export const LeftSideProfile = (props) => {
    const { keycloak, initialized } = useKeycloak()
    const [ user, setUser] = useState({userInfo: {}, initialized: false})

    const isLoggedIn = keycloak.authenticated

    if (isLoggedIn && !user.initialized) {
        if (!keycloak.profile)
            keycloak.loadUserProfile().then(profile => setUser({userInfo: profile, initialized: true}))
        else 
            setUser({userInfo: keycloak.profile, initialized: true})
    }
    
    if (user.initialized) {
        console.log('User info: ', user.userInfo)
    }
    
    return (
        <div {...props}>
            {isLoggedIn ?
                <>
                    <UserProfileInfo user={user.userInfo} />
                    <ProfileLinks />
                </>
            :
                <Auth keycloak={keycloak} />   
            }
        </div>
    );
}