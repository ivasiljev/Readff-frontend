import React from 'react';
import styles from '../css/components/Navigation.module.css';

import { NavButton } from '../elements/NavigationButton';

const navItems = [
    {
        key: 'home',
        path: '/',
        itemName: 'Home',
    },
    {
        key: 'search',
        path: '/search',
        itemName: 'Search',
    },
    {
        key: 'about',
        path: '/about',
        itemName: 'About',
    },
    {
        key: 'contact',
        path: '/contact',
        itemName: 'Contact',
    }
]

const NavMenu = props => ( <div className={`navbar-nav ${styles.nav}`} {...props}></div> )

export function Navigation() {
    return (
    <NavMenu>
        {navItems.map((item, _) => (
            <NavButton key={item.key} path={item.path} name={item.itemName} />
        ))}
    </NavMenu>
    );
}