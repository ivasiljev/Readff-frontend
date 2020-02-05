import React from 'react';

const Search = props => <div className='search' {...props}></div>

export const SearchPage = () => {
    return (
    <Search>
        <h1>Search!</h1>
    </Search>
    )
}