import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/NavigationButton.module.css';

export const NavButton = (props) => (
    <div className='nav-item'>
        <NavLink activeClassName={`${styles.active}`} exact={true} className={`navigationLinkFont ${styles.navItem}`} to={props.path}>{props.name}</NavLink>
    </div>
);