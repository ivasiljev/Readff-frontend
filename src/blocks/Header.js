import React from 'react';
import styles from './Header.module.css';

import { NavLinks } from '../components/Navigation';
import { Logo } from '../components/Logo';
import { FastSearch } from '../components/FastSearch';

export function Header(props) {
    return (
    <header className={styles.header}>
        <Logo />
        <FastSearch />
        <NavLinks NavItems={props.NavItems} />
    </header>
    );
}