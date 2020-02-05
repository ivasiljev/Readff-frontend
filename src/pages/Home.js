import React from 'react';

const Home = props => <div className="home" {...props}></div>

export function HomePage() {
    return (
    <Home>
        <h1>Home!</h1>  
    </Home>
    );
}