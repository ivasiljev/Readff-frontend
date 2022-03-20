import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/ProfileNavigation.module.css';

var navigationItems = [
    {
        key: 'posts',
        text: 'My Posts',
        path: '/:id/posts'
    },
    {
        key: 'New post',
        text: 'New post',
        path: '/:id/article'
    },
    {
        key: 'messages',
        text: 'Messages',
        path: '/:id/messages'
    },
    {
        key: 'notifications',
        text: 'Notifications',
        path: '/:id/notifications'
    },
    {
        key: 'subscriptions',
        text: 'Subscriptions',
        path: '/:id/subscriptions'
    },
    {
        key: 'likes',
        text: 'Likes',
        path: '/:id/likes'
    },
    {
        key: 'readlater',
        text: 'Read later',
        path: '/:id/readlater'
    },
    {
        key: 'library',
        text: 'Library',
        path: '/:id/library'
    },
]

export function ProfileLinks(props) {
    return (
    <ol className={styles.list}>
        {navigationItems.map((item) => (
            <li key={item.key}>
                <NavLink className={`${styles.listItem}`} to={item.path}>{item.text}</NavLink>
            </li>
        ))}
    </ol>
    );
}