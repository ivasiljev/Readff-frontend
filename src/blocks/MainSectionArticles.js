import { useKeycloak } from '@react-keycloak/web';
import React, { useState } from 'react';
import { SmallArticle } from '../components/MainSection_SmallArticle';
import ArticleService from '../services/ArticleService';

export const MainSectionArticles = () => {
    const { keycloak, initialized } = useKeycloak()
    const [data, setData] = useState({articlesInfo: [], articlesInit: false})

    const token = keycloak.token;

    if (!data.articlesInit) {
        ArticleService.getAllArticles().then((result) => {
            if (!data.articlesInit) setData({articlesInfo: result.data, articlesInit: true})
        }).catch(error => { 
            if (!data.articlesInit) setData({articlesInfo: {}, articlesInit: true})
            console.log(error)
        })
    }

    let content = <React.Fragment></React.Fragment>
    if (data.articlesInfo.length > 0) {
        content = (data.articlesInfo.map((article, id) => {
            return <SmallArticle key={id} ArticleInfo={article} />
        }));
    }

    return content;
}