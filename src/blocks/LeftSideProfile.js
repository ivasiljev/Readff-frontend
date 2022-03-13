import React from 'react';
import { NavLink } from 'react-router-dom';

import { ProfileLinks } from '../components/ProfileNavigation';
import { LoginForm } from './LoginForm';
import { useKeycloak } from '@react-keycloak/web';

const UserProfileInfo = props => (
    <div {...props}>
        <img src='src' alt='avatar'></img>
        <div>
            <NavLink to='/profile'>Name</NavLink>
            <br></br>
            <span>id: 12312414</span>
        </div>
    </div>
)

const Auth = (props) => {
    return (
    <div className='row justify-content-center'>
        <button type="button" className='col-7 btn btn-primary mt-5' onClick={() => props.keycloak.login()}>Log in</button>
        <button type="button" className='col-7 btn btn-primary mt-4' onClick={() => props.keycloak.register()}>Sign up</button>
    </div>)
}

export const LeftSideProfile = (props) => {
    const { keycloak, initialized } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return (
        <div {...props}>
            {isLoggedIn ?
                <div>
                    <UserProfileInfo />
                    <ProfileLinks />
                </div>
            :
                <Auth keycloak={keycloak} />   
            }
        </div>
    );
}