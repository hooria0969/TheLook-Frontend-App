import React from 'react';
import { Link } from 'react-router-dom';

function ArtistCard({ artistObj, key }) {
    return (
        <div className="card">

            <img src={artistObj.artistImage} alt={artistObj.artistName} />

            <h1> {artistObj.artistName} </h1>
            <Link to={`/ArtistDetails/${artistObj.artistDetailId}`}> <button>View Details</button> </Link>

        </div>

    );
}
export default ArtistCard;