import React from 'react';
import ReactDOM from 'react-dom';
import './css/Fonts.css';
import './css/Colors.css';
import './css/GlobalConsts.css';
import './css/index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';

ReactDOM.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <App />
    </ReactKeycloakProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
