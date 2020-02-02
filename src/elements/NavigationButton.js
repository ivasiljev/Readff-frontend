import React from 'react';
import { Link } from 'react-router-dom';

export const NavButton = (props) => (
    <Link className="nav-item" to={props.item.path}>{props.item.itemName}</Link>
);