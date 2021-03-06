import React from 'react';
import { RegistrationForm } from '../blocks/RegistrationForm';
import { MainPanel } from '../components/panels/MainPanel';

export function RegistrationPage(props) {
    return (
        <MainPanel>
            <RegistrationForm />
        </MainPanel>
    );
}