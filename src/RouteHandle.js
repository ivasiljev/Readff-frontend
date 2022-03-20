import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { generatePath } from "react-router";

import { LoginPage } from './pages/Login';
import { RegistrationPage } from './pages/Registration';

import { HomePage } from './pages/Home';
import { SearchPage } from './pages/Search';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { NotFoundPage } from './pages/NotFoundPage';

import { UserProfile } from './pages/UserProfile';
import { MyPostsPage } from './pages/MyPosts';
import { ArticlePage } from './pages/Article';

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
        key: 'profile',
        path: '/:id',
        page: (props) => 
            <PathWithIdHandle {...props}>
                <UserProfile />
            </PathWithIdHandle>,
    },
    {
        key: 'myposts',
        path: '/:id/posts',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <MyPostsPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'article',
        path: '/:id/article',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <ArticlePage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>
    },
    {
        key: 'messages',
        path: '/:id/messages',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'notifications',
        path: '/:id/notifications',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'subscriptions',
        path: '/:id/subscriptions',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'likes',
        path: '/:id/library/likes',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'readlater',
        path: '/:id/library/readlater',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
    },
    {
        key: 'library',
        path: '/:id/library',
        page: (props) => 
            <AuthenticatedOnlyPage {...props}>
                <PathWithIdHandle {...props}>
                    <NotFoundPage />
                </PathWithIdHandle>
            </AuthenticatedOnlyPage>,
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
]

const AuthenticatedOnlyPage = (props) => {
    let content = <></>
    if (props.keycloak.authenticated)
        content = <React.Fragment children={props.children}></React.Fragment>
    else
        content = <div>Only authorized users allowed to visit this page</div>
    return content
}

const PathWithIdHandle = (props) => {
    const path = props.history.location.pathname
    const id = props.keycloak.profile?.username

    if (path.indexOf(":id") != -1 && id) {
        return <Redirect to={generatePath(path, { id })} />
    }

    return props.children
}

export const RouteHandle = () => {
    const history = useHistory()
    const { keycloak, initialized } = useKeycloak()
    const props = { history: history, keycloak: keycloak }
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