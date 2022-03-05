import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/ProfileNavigation.module.css';

var navigationItems = [
    {
        key: 'posts',
        text: 'My Posts',
        path: '/user/:id/posts'
    },
    {
        key: 'messages',
        text: 'Messages',
        path: '/user/:id/messages'
    },
    {
        key: 'notifications',
        text: 'Notifications',
        path: '/user/:id/notifications'
    },
    {
        key: 'subscriptions',
        text: 'Subscriptions',
        path: '/user/:id/subscriptions'
    },
    {
        key: 'likes',
        text: 'Likes',
        path: '/user/:id/likes'
    },
    {
        key: 'readlater',
        text: 'Read later',
        path: '/user/:id/readlater'
    },
    {
        key: 'library',
        text: 'Library',
        path: '/user/:id/library'
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