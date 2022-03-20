import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './blocks/Header';
import { LeftSideProfile } from './blocks/LeftSideProfile';
import { LeftSidePanel } from './components/panels/LeftSidePanel';
import { RouteHandle } from './RouteHandle';

// globalWrapper and page classes you can find inside the index.css file
const GlobalWrapper = props => <div className='globalWrapper' {...props}></div>
const PageWrapper = props => <div className='page' {...props}></div>


export const App = () => {
    return (
    <GlobalWrapper>
        <Router>
            <Header auth={false} />

            <PageWrapper>
                <LeftSidePanel>
                    <LeftSideProfile />
                </LeftSidePanel>
                <RouteHandle />
            </PageWrapper>
        </Router>
    </GlobalWrapper>)
}
