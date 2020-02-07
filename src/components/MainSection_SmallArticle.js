import React from 'react';
import styles from './MainSection_SmallArticle.module.css';

const LeftSidedContent = props => <div {...props}></div>
const RightSidedContent = props => <figure {...props}></figure>

const Title = props => <div className={styles.line} {...props}></div>
const UnderTitleField = props => <div className={styles.line} {...props}></div>
const ArticleShortText = props => <p {...props}></p>

export const SmallArticle = ({ ArticleInfo }) => {
    return (
    <article className={styles.article + ' ' + styles.line}>
        <LeftSidedContent>
            <Title>
                <img src={ArticleInfo.author.avatar.img} alt={ArticleInfo.author.avatar.alt}/>
                <h2>{ArticleInfo.article.title}</h2>
            </Title>
            <UnderTitleField>
                <h5>{`${ArticleInfo.author.name} / ${ArticleInfo.article.publicationDate}`}</h5>
                <h5>{`.........${ArticleInfo.article.viewsCount} views`}</h5>
            </UnderTitleField>
            <ArticleShortText>{ArticleInfo.article.shortText}</ArticleShortText>
        </LeftSidedContent>

        <RightSidedContent>
            <img src={ArticleInfo.article.mainImage.img} alt={ArticleInfo.article.mainImage.alt} />
        </RightSidedContent>
    </article>
    )
}