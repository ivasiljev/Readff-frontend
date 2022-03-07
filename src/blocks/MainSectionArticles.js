import React, { useEffect, useState } from 'react';
import { SmallArticle } from '../components/MainSection_SmallArticle';
import ArticleService from '../services/ArticleService';

export const MainSectionArticles = () => {
    

    const [ArticlesInfo, setArticle] = useState([])

    useEffect(() => {
        ArticleService.getAllArticles().then((result) => {
            setArticle(result.data);
        }).catch(error => { 
            console.log(error)
        })
    }, [])

    const content = (ArticlesInfo.map((article, id) => {
        return <SmallArticle key={id} ArticleInfo={article} />
    }));

    return content;
}