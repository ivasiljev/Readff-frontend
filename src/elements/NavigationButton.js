import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationButton.module.css';

export const NavButton = (props) => (
    <NavLink exact={true} className={`navigationLinkFont ${styles.navItem}`} to={props.item.path}>{props.item.itemName}</NavLink>
);