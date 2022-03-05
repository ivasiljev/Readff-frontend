import React from 'react';
import styles from '../../css/components/panels/LeftSidePanel.module.css';

export const LeftSidePanel = (props) => {
    return <aside className={styles.leftSidePanel} {...props}></aside>;
}