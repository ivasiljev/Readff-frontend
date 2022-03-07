import React from 'react';
import { LoginForm } from '../blocks/LoginForm';
import { MainPanel } from '../components/panels/MainPanel';


export function LoginPage(props) {
    return (
        <MainPanel>
            <LoginForm />
        </MainPanel>
    );
}