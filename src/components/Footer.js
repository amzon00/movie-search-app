import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <footer className="App-footer">
                <h6>{props.text}</h6>
            </footer>
        </div>
    )
};


export default Footer;
