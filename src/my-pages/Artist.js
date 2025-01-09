
import { Link } from 'react-router-dom';
import axios from "axios";
//import { ArtistList } from '../Data/ArtistList';
import ArtistCard from '../my-components/ArtistCard';
import React, { useEffect, useState } from "react";

function Artist() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [artistList, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
       
        const response = await axios.get("https://the-look-backend-app2.vercel.app/Artists");
        setArtists(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) return <p>Loading Artists...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="artist-page">

      <div className="contactspace1"></div>


      <div className="page-title"> <span> Artists </span> </div>
      <div className="container-box">
        {
          artistList.map((artist, key) => {

            return <ArtistCard artistObj={artist} />

          }
          )
        }
      </div>
    </div>

  );
}
export default Artist;
