import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <h2>{props.text}</h2>
            <form className="form-HomeBtn" action="/">
                <button className="Home-btn" type="submit">Home</button>
            </form>
        </header>
    );
};


export default Header;