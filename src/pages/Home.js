import React from 'react';
import styles from '../css/pages/Home.module.css';
import { LeftSidePanel } from '../components/panels/LeftSidePanel';
import { LeftSideProfile } from '../blocks/LeftSideProfile';
import { RightSideRecomendedArticles } from '../blocks/RightSideRecomendedArticles';
import { MainSectionArticles } from '../blocks/MainSectionArticles';
import { MainPanel } from '../components/panels/MainPanel';
import { RightSidePanel } from '../components/panels/RightSidePanel';

const Home = props => <div className={styles.home} {...props}></div>

export function HomePage(props) {
    return (
    <Home>
        <LeftSidePanel>
            <LeftSideProfile />
        </LeftSidePanel>
        <MainPanel>
            <MainSectionArticles ArticlesInfo={props.ArticlesInfo} />
        </MainPanel>
        <RightSidePanel>
            <RightSideRecomendedArticles />
        </RightSidePanel>
    </Home>
    );
}