import React from 'react';

const Contact = props => <div className="contact" {...props}></div>

export function ContactPage() {
    return (
    <Contact>
        <h1>Contact Us!</h1>  
    </Contact>
    );
}