import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';

import { HomePage } from './pages/Home';
import { SearchPage } from './pages/Search';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { NotFoundPage } from './pages/NotFoundPage';

import { MyPostsPage } from './pages/MyPosts';
import { ArticlePage } from './pages/Article';

const AuthenticatedOnlyPage = (props) => {
    const { keycloak } = useKeycloak();
    let content = <div></div>
    if (keycloak.authenticated)
        content = <div {...props}></div>
    else
        content = <div>Only authorized users allowed to visit this page</div>
    return content
}

const routeItems = [
    {
        key: 'home',
        path: '/',
        page: (props) => <HomePage />
    },
    {
        key: 'search',
        path: '/search',
        page: (props) => <SearchPage />,
    },
    {
        key: 'about',
        path: '/about',
        page: (props) => <AboutPage />,
    },
    {
        key: 'contact',
        path: '/contact',
        page: (props) => <ContactPage />,
    },
    {
        key: 'myposts',
        path: '/user/:id/posts',
        page: (props) => <AuthenticatedOnlyPage><MyPostsPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'messages',
        path: '/user/:id/messages',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'notifications',
        path: '/user/:id/notifications',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'subscriptions',
        path: '/user/:id/subscriptions',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'likes',
        path: '/user/:id/library/likes',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'readlater',
        path: '/user/:id/library/readlater',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'library',
        path: '/user/:id/library',
        page: (props) => <AuthenticatedOnlyPage><NotFoundPage /></AuthenticatedOnlyPage>,
    },
    {
        key: 'login',
        path: '/login',
        page: (props) => <LoginPage />
    },
    {
        key: 'registration',
        path: '/registration',
        page: (props) => <RegistrationPage />
    },
    {
        key: 'article',
        path: '/article',
        page: (props) => <AuthenticatedOnlyPage><ArticlePage /></AuthenticatedOnlyPage>
    }
]

export const RouteHandle = (props) => {
    return(
    <Switch>
        {
            routeItems.map((route) => (
                <Route key={route.key} exact path={route.path}>
                    {route.page(props)}
                </Route>
            ))
        }
        <Route>
            <NotFoundPage />
        </Route>
    </Switch>)
}