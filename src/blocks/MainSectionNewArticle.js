import { useKeycloak } from '@react-keycloak/web';
import React, { useState } from 'react';
import ArticleService from '../services/ArticleService';
import { useHistory } from "react-router-dom";

export const MainSectionNewArticle = (props) => {
    const { keycloak, initialized } = useKeycloak()
    const [articleInfo, setArticleInfo] = useState({})
    const history = useHistory();

    const titleChanged = (event) => {
        const article = articleInfo
        article.title = event.target.value
        setArticleInfo(article);
    }

    const textChanged = (event) => {
        const article = articleInfo
        article.text = event.target.value
        setArticleInfo(article);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        ArticleService.postNewArticle(articleInfo, keycloak.token)
        .then(function (response) {
            console.log(response);
            history.push('/')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <form className='row justify-content-center' onSubmit={handleSubmit}>
            <div className='col-11 m-2'>
                <span>Title: </span>
                <input type='text' onChange={titleChanged} placeholder='Write your title here' />
            </div>
            <textarea className='col-11 m-2' onChange={textChanged} placeholder='Write anything you would like to share with people' />
            <button className="col-3 btn btn-lg btn-primary m-2" type="submit">Post</button>
        </form>
    )
}