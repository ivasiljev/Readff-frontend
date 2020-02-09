import React from 'react';
import styles from './Home.module.css';
import { LeftSideProfile } from '../blocks/LeftSideProfile';
import { RightSideRecomendedArticles } from '../blocks/RightSideRecomendedArticles';
import { MainSectionArticles } from '../blocks/MainSectionArticles';

const Home = props => <div className={styles.home} {...props}></div>

export function HomePage(props) {
    return (
    <Home>
        <LeftSideProfile NavigationItems={props.LeftPanelItems} />
        <MainSectionArticles ArticlesInfo={props.ArticlesInfo} />
        <RightSideRecomendedArticles />
    </Home>
    );
}