import React from 'react';
import { SmallArticle } from '../components/MainSection_SmallArticle';

export const MainSectionArticles = props => {
    const content = (props.ArticlesInfo.map((article, id) => {
        return <SmallArticle key={id} ArticleInfo={article} />
    }));

    return content;
}