import React, { Fragment } from 'react';
import {Link, useHistory} from 'react-router-dom';

const SingleMovie = (props) => {
    let currentMovie = props.location.aboutProps.movie;
    let history = useHistory();
    console.log(currentMovie)
    return (
        <div>
             <div className="container">
                    <div>
                        <Fragment>
                        <h1>{currentMovie.Title}</h1>
                        <img src={currentMovie.Poster}></img>
                        <h2>({currentMovie.Year})</h2>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <button onClick={() => {history.goBack()}}>Back</button>
                        </Fragment>
                    </div>
            </div>
        </div>
    )
}


export default SingleMovie;