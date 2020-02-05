import React from 'react';

const About = props => <div className="about" {...props}></div>

export function AboutPage() {
    return (
    <About>
        <h1>About!</h1>  
    </About>
    );
}