import React from 'react';

import { NavButton } from '../elements/NavigationButton';

const items = [
    { 
        itemName: 'Home',
        path: '/'
    },
    { 
        itemName: 'About',
        path: '/about'
    },
    { 
        itemName: 'Contact',
        path: '/contact'
    },
]

export function NavLinks() {
    return (
    <div className='nav'>
        {items.map(item => (
            <NavButton item={item} />
        ))}
    </div>
    );
}