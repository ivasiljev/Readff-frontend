import React, { useEffect, useState } from 'react';
import ArticleService from '../services/ArticleService';

export class MainSectionNewArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
    
        this.titleChanged = this.titleChanged.bind(this);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    titleChanged(event) {
        this.setState({title: event.target.value});
    }

    textChanged(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        ArticleService.postNewArticle(this.state)

        event.preventDefault();
    }


    render() {
        return (
            <form className='row justify-content-center' onSubmit={this.handleSubmit}>
                <div className='col-11 m-2'>
                    <span>Title: </span>
                    <input type='text' value={this.state.title}  onChange={this.titleChanged} placeholder='Write your title here' />
                </div>
                <textarea className='col-11 m-2' value={this.state.text} onChange={this.textChanged} placeholder='Write anything you would like to share with people' />
                <button className="col-3 btn btn-lg btn-primary m-2" type="submit">Post</button>
            </form>
        )
    }
}