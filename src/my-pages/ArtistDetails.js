import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


function ArtistDetails() {

 /* const {id}=useParams();
  const artistDetails = {
    1: { name: 'Leonardo di Vinci',image:  "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/leonarodo-di-vinci222.jpg?raw=true", description: "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.Leonardo is identified as one of the greatest painters in the history of Western art and is often credited as the founder of the High Renaissance.Despite having many lost works and fewer than 25 attributed major works including numerous unfinished works he created some of the most influential paintings in the Western canon.Mona Lisa is his best known work and is the world's most famous individual painting. The Last Supper is the most reproduced religious painting of all time and his Vitruvian Man drawing is also regarded as a cultural icon."},
    2: { name: 'Vincent Van Gogh', image:  "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/vincent-van-gogh.jpg?raw=true", description: "Vincent Willem van was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life. His oeuvre includes landscapes, still lifes, portraits, and self-portraits, most of which are characterised by bold colours and dramatic brushwork that contributed to the rise of expressionism in modern art." },
    3: { name: 'Pablo Picasso',image: "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/picasso.jpg?raw=true" , description: "Pablo Ruiz Picasso[a][b] (25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture,[8][9] the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907) and the anti-war painting Guernica (1937), a dramatic portrayal of the bombing of Guernica by German and Italian air forces during the Spanish Civil War." },
    4: { name: 'Michelanglo', image: "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/Michelanglo.jpg?raw=true" , description: 'This is the detail of Artist 4' },
    5: { name: 'Hokusai',image: "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/fine-wind.jpg?raw=true" , description: "Katsushika Hokusai ( 31 October 1760 – 10 May 1849), known mononymously as Hokusai, was a Japanese ukiyo-e artist of the Edo period, active as a painter and printmaker. His woodblock print series Thirty-Six Views of Mount Fuji includes the iconic print The Great Wave off Kanagawa. Hokusai was instrumental in developing ukiyo-e from a style of portraiture largely focused on courtesans and actors into a much broader style of art that focused on landscapes, plants, and animals. His works had a significant influence on Vincent van Gogh and Claude Monet during the wave of Japonisme that spread across Europe in the late 19th century." },
    6: { name: 'Andy Warhol',image:  "https://github.com/hooria0969/23pwbcs0969-WPF24/blob/main/pics/Marilyndiptych.jpg?raw=true", description: 'This is the detail of Artist 6' },
  };
  const artistDetailObj=artistDetails[id];*/

    const [artistDetail,setArtistsDetail ]=useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
  useEffect(() => {
    const fetchArtistDetail = async () => {
      try {
        const response = await axios.get(`https://the-look-backend-app2.vercel.app/ArtistDetails/${id}`);
        setArtistsDetail(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArtistDetail();
  }, []);

  if (loading) return <p>Loading Artist Details...</p>;
  if (error) return <p>Error: {error}</p>;

    return(
        <div className="artist-detail-page">
            <div className="detail-box">
                <div className="detail-img">
                  <img src={artistDetail?.image || 'default-image.jpg'} alt={artistDetail?.name || 'Artist'} />
                </div>

                <div className="description-box">
                    <h1>{artistDetail.name}</h1>
                    <p> {artistDetail.description} </p>
                </div>
             </div>
        </div>
    );
}
export default ArtistDetails;