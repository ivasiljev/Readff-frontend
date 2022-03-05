import React from 'react';
import styles from '../css/blocks/Header.module.css';

import { Navigation } from '../components/Navigation';
import { Logo } from '../components/Logo';
import { LeftSideProfile } from '../blocks/LeftSideProfile';

var OpenSideMenuButton = () => (
    <button className={`navbar-toggler ${styles.togglerBtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
);

var CloseSideMenuButton = () => (
    <button className={`navbar-toggler ${styles.togglerBtn}`} type="button" data-bs-dismiss="offcanvas">
        <span className="navbar-toggler-icon"></span>
    </button>
);

export function Header(props) {
    return (
    <nav className={`navbar navbar-expand-lg sticky-top navbar-dark ${styles.header}`}>
        <div className='container-fluid justify-content-start'>
            <OpenSideMenuButton />
            <Logo className='navbar-brand' />
            <div className={`offcanvas offcanvas-start ${styles.headerOffcanvas}`} id="offcanvasNavbar">
                <div className={`offcanvas-header justify-content-start ${styles.offcanvasHeader}`}>
                    <CloseSideMenuButton />
                    <Logo className="offcanvas-title" id="offcanvasNavbarLabel" />
                    
                </div>
                <hr className='offcanvas-header mt-0 p-0'></hr>
                <Navigation />
                <hr className='offcanvas-header p-0'></hr>
                {!props.auth &&
                    <LeftSideProfile className='offcanvas-header'/>
                }
            </div>
        </div>
    </nav>
    );
}