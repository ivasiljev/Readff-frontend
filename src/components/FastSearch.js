import React from 'react';
import styles from '../css/components/FastSearch.module.css';
import search from '../img/search.jpg'

export const FastSearch = () => (
    <img className={styles.fastSearch} src={search} alt='fast search' />
);