import React from 'react';
import styles from './Home.module.css';
import { LeftSideProfile } from '../blocks/LeftSideProfile';
import { RightSideRecomendedArticles } from '../blocks/RightSideRecomendedArticles';
import { MainSectionArticles } from '../blocks/MainSectionArticles';

const Home = props => <div className={styles.home} {...props}></div>

export function HomePage() {
    return (
    <Home>
        <LeftSideProfile />
        <MainSectionArticles />
        <RightSideRecomendedArticles />
    </Home>
    );
}