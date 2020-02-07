import React from 'react';
import styles from './MainSectionPanel.module.css';
import { SmallArticle } from '../components/MainSection_SmallArticle';

export const MainSectionArticles = props => (
    <section className={styles.mainSectionPanel}>
        {props.ArticlesInfo.map((article, id) => {
            return <SmallArticle key={id} ArticleInfo={article} />
        })}
    </section>
)