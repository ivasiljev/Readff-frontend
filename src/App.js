import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './blocks/Header';
import { RouteHandle } from './RouteHandle';

// var articlesInfo = [
//     {
//         id: 0,
//         author: {
//             name: 'name1',
//             avatar: {
//                 img: 'sourcePath1',
//                 alt: 'avatarImageName1',
//             }
//         },
//         article: {
//             publicationDate: 'date1',
//             viewsCount: 1,
//             title: 'TITLE1',
//             shortText: 'SomeTextHere1',
//             mainImage: {
//                 img: 'sourcePath1',
//                 alt: 'articleImageName1',
//             },
//         },
//     },
//     {
//         id: 1,
//         author: {
//             name: 'name2',
//             avatar: {
//                 img: 'sourcePath2',
//                 alt: 'avatarImageName2',
//             }
//         },
//         article: {
//             publicationDate: 'date2',
//             viewsCount: 2,
//             title: 'TITLE2',
//             shortText: 'SomeTextHere2',
//             mainImage: {
//                 img: 'sourcePath2',
//                 alt: 'articleImageName2',
//             },
//         },
//     },
// ];

// globalWrapper and page classes you can find inside the index.css file
const GlobalWrapper = props => <div className='globalWrapper' {...props}></div>

export const App = () => (
    <GlobalWrapper>
        <Router>
            <Header auth={false} />

            <RouteHandle />
        </Router>
    </GlobalWrapper>
);
