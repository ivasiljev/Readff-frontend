import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Fonts.css';
import './Colors.css';

import { Header } from './blocks/Header';
import { HomePage } from './pages/Home';
import { SearchPage } from './pages/Search';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { NotFoundPage } from './pages/NotFoundPage';

const articlesInfo = [
    {
        id: 0,
        author: {
            name: 'name1',
            avatar: {
                img: 'sourcePath1',
                alt: 'avatarImageName1',
            }
        },
        article: {
            publicationDate: 'date1',
            viewsCount: 1,
            title: 'TITLE1',
            shortText: 'SomeTextHere1',
            mainImage: {
                img: 'sourcePath1',
                alt: 'articleImageName1',
            },
        },
    },
    {
        id: 1,
        author: {
            name: 'name2',
            avatar: {
                img: 'sourcePath2',
                alt: 'avatarImageName2',
            }
        },
        article: {
            publicationDate: 'date2',
            viewsCount: 2,
            title: 'TITLE2',
            shortText: 'SomeTextHere2',
            mainImage: {
                img: 'sourcePath2',
                alt: 'articleImageName2',
            },
        },
    },
];

const leftPanelProfileNavigationItems = [
    {
        itemName: 'My Posts',
        path: '/myposts',
        page: <div />
    },
    {
        itemName: 'Messages',
        path: '/messages',
        page: <div />
    },
    {
        itemName: 'Notifications',
        path: '/notifications',
        page: <div />
    },
    {
        itemName: 'Subscriptions',
        path: '/subscriptions',
        page: <div />
    },
    {
        itemName: 'Liked Posts',
        path: '/likedposts',
        page: <div />
    },
    {
        itemName: 'Read Later',
        path: '/readlater',
        page: <div />
    },
    {
        itemName: 'Library',
        path: '/library',
        page: <div />
    },
]

const navigationItems = [
    {
        itemName: 'Home',
        path: '/',
        page: <HomePage ArticlesInfo={articlesInfo} LeftPanelItems={leftPanelProfileNavigationItems} />
    },
    {
        itemName: 'Search',
        path: '/search',
        page: <SearchPage />
    },
    {
        itemName: 'About',
        path: '/about',
        page: <AboutPage />
    },
    {
        itemName: 'Contact',
        path: '/contact',
        page: <ContactPage />
    },
]

// globalWrapper and page classes you can find inside the index.css file
const GlobalWrapper = props => <div className='globalWrapper' {...props}></div>
const PageWrapper = props => <main className='page' {...props}></main>;  

// returns <Route> for each item from navigationItem array
const RouteNavPages = () => (
    navigationItems.map(({ path, page }, index) => {
        return (
        <Route key={index} exact path={path}>
            {page}
        </Route>
        )
    })
);

const RouteProfilePages = () => (
    leftPanelProfileNavigationItems.map(({ path, page }, index) => {
        return (
        <Route key={index} exact path={path}>
            {page}
        </Route>
        )
    })
);

export const App = () => (
    <GlobalWrapper>
        <Router>
            <Header NavItems={navigationItems} />

            <PageWrapper>
                <Switch>
                    <RouteNavPages />
                    <RouteProfilePages />
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </PageWrapper>

            {/* <Footer /> */}
        </Router>
    </GlobalWrapper>
);
