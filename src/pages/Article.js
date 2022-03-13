import React from 'react';
import { LeftSidePanel } from '../components/panels/LeftSidePanel';
import { LeftSideProfile } from '../blocks/LeftSideProfile';
import { MainPanel } from '../components/panels/MainPanel';
import { MainSectionNewArticle } from '../blocks/MainSectionNewArticle';
import { RightSidePanel } from '../components/panels/RightSidePanel';
import { useKeycloak } from '@react-keycloak/web';

const Article = props => <div className='page' {...props}></div>

export function ArticlePage(props) {
    return (
    <Article>
        <MainPanel>
            <MainSectionNewArticle />
        </MainPanel>
    </Article>
    );
}