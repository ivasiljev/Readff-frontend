import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { AnotherUserProfile, MainSection_UserProfile } from '../blocks/MainSection_UserProfile';
import { MainPanel } from '../components/panels/MainPanel';
import { RightSidePanel } from '../components/panels/RightSidePanel';

export function UserProfile(props) {
    const history = useHistory()
    const { keycloak, initialized } = useKeycloak()
    const [ isYourProfile, setIsYourProfile ] = useState(false)

    const splitedPath = history.location.pathname.split('/')
    const username = splitedPath[splitedPath.length - 1]
    let isYourProfileNew = false
    if (initialized && keycloak.authenticated) {
        if (!keycloak.profile) keycloak.loadUserProfile().then(profile => 
            setIsYourProfile(username === profile.username))
        else {
            isYourProfileNew = username === keycloak.profile?.username
            if (isYourProfile != isYourProfileNew)
                setIsYourProfile(isYourProfileNew)
        }
    }
    return (
    <>
        <MainPanel>
            {isYourProfile
            ?<MainSection_UserProfile />
            :<AnotherUserProfile username={username} />}
        </MainPanel>
        <RightSidePanel>
        </RightSidePanel>
    </>
    );
}