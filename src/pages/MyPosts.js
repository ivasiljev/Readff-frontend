import React from 'react';
import { LeftSideProfile } from '../blocks/LeftSideProfile';
import { RightSideRecomendedArticles } from '../blocks/RightSideRecomendedArticles';
//import { MainSectionArticles } from '../blocks/MainSectionArticles';

const MyPosts = (props) => <div {...props}></div>

export const MyPostsPage = (props) => (
    <MyPosts>
        <LeftSideProfile />
        {/* <MainSectionArticles /> */}
        <RightSideRecomendedArticles />
    </MyPosts>
)