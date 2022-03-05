import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Registration } from './pages/Registration';

import { HomePage } from './pages/Home';
import { SearchPage } from './pages/Search';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { NotFoundPage } from './pages/NotFoundPage';

import { MyPostsPage } from './pages/MyPosts';

const routeItems = [
    {
        key: 'home',
        path: '/',
        page: (props) => <HomePage ArticlesInfo={props.ArticlesInfo} />
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
        page: (props) => <MyPostsPage />,
    },
    {
        key: 'messages',
        path: '/user/:id/messages',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'notifications',
        path: '/user/:id/notifications',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'subscriptions',
        path: '/user/:id/subscriptions',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'likes',
        path: '/user/:id/library/likes',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'readlater',
        path: '/user/:id/library/readlater',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'library',
        path: '/user/:id/library',
        page: (props) => <NotFoundPage />,
    },
    {
        key: 'login',
        path: '/login',
        page: (props) => <Login />
    },
    {
        key: 'registration',
        path: '/registration',
        page: (props) => <Registration />
    },
]

export const RouteHandle = (props) => (
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
    </Switch>
)