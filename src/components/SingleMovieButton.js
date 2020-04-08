import React from 'react';
import {Link} from 'react-router-dom';

function SingleMovieButton({movie}) {
    return (
        <button>
            <Link to={{pathname:'/single-movie', aboutProps:{ movie: movie}}} >More Details</Link>
        </button>
    )
}

export default SingleMovieButton
