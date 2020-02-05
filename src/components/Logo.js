import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

const LogoSection = props => <div className={styles.logo} {...props}></div>
const LogoText = props => <NavLink className={`logoFont ${styles.logoText}`} {...props} to='/'></NavLink>

export const Logo = () => (
    <LogoSection>
        <LogoText>Readff</LogoText>
    </LogoSection>
);