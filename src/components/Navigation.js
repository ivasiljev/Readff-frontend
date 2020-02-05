import React from 'react';
import styles from './Navigation.module.css';

import { NavButton } from '../elements/NavigationButton';

const NavMenu = props => <div className={styles.nav} {...props}></div>;

export function NavLinks(props) {
    return (
    <NavMenu>
        {props.NavItems.map(item => (
            <NavButton item={item} />
        ))}
    </NavMenu>
    );
}