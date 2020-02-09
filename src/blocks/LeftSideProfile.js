import React from 'react';
import styles from './LeftSidePanel.module.css';
import { NavLink } from 'react-router-dom';

const Top = props => <div {...props}></div>

export const LeftSideProfile = (props) => {
    return (
    <aside className={styles.leftSidePanel}>
        <Top>
            <img src='src' alt='avatar'></img>
            <div>
                <NavLink to='/profile'>Name</NavLink>
                <br></br>
                <span>id: 12312414</span>
            </div>
        </Top>
        <ol className={styles.list}>
            {props.NavigationItems.map((item) => (
                <li>
                    <NavLink to={item.path}>{item.itemName}</NavLink>
                </li>
            ))}
            {/* <li>
                <NavLink className={styles.listItem} to='/myposts'>My Posts</NavLink>
            </li>
            <li>
                <NavLink to='/messages'>Messages</NavLink>
            </li>
            <li>
                <NavLink to='/notifications'>Notifications</NavLink>
            </li>
            <li>
                <NavLink to='/subscriptions'>Subscriptions</NavLink>
            </li>
            <li>
                <NavLink to='/likedposts'>Liked Posts</NavLink>
            </li>
            <li>
                <NavLink to='/readlater'>Read Later</NavLink>
            </li>
            <li>
                <NavLink to='/library'>Library</NavLink>
            </li> */}
        </ol>
    </aside>
    )
}