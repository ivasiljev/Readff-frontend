import React from 'react';
import { RightSideRecomendedArticles } from '../blocks/RightSideRecomendedArticles';
import { MainSectionArticles } from '../blocks/MainSectionArticles';
import { MainPanel } from '../components/panels/MainPanel';
import { RightSidePanel } from '../components/panels/RightSidePanel';

export function HomePage(props) {
    return (
    <>
        <MainPanel>
            <MainSectionArticles />
        </MainPanel>
        <RightSidePanel>
            <RightSideRecomendedArticles />
        </RightSidePanel>
    </>
    );
}