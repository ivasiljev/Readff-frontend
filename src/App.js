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

const navigationItems = [
    {
        itemName: 'Home',
        path: '/',
        page: <HomePage />
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
const RoutePages = () => (
    navigationItems.map(({ path, page }) => {
        return (
        <Route exact path={path}>
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
                    <RoutePages />
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </PageWrapper>

            {/* <Footer /> */}
        </Router>
    </GlobalWrapper>
);
