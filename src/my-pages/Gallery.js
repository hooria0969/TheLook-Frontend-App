import React from 'react';
import LightGallery from 'lightgallery/react/Lightgallery.es5';
// import './gallery.css';

// importing styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-share.css'
import 'lightgallery/css/lg-rotate.css'


// importing plugins 
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

// Import images from Assests folder
import img1 from '../Assests/1.jpg';
import img2 from '../Assests/2.jpg';
import img3 from '../Assests/3.jpg';
import img4 from '../Assests/4.jpg';
import img5 from '../Assests/5.jpg';
import img6 from '../Assests/6.jpg';
import img7 from '../Assests/7.jpg';
import img8 from '../Assests/8.jpg';
import img9 from '../Assests/9.jpg';
import img10 from '../Assests/10.jpg';
import img11 from '../Assests/11.jpg';
import img12 from '../Assests/12.jpg';
import img13 from '../Assests/13.jpg';
import img14 from '../Assests/14.jpg';
import img15 from '../Assests/15.jpg';
import img16 from '../Assests/16.jpg';
import img17 from '../Assests/17.jpg';
import img18 from '../Assests/18.jpg';
import img19 from '../Assests/19.jpg';
import img20 from '../Assests/20.jpg';
import img21 from '../Assests/21.jpg';
import img22 from '../Assests/22.jpg';
import img23 from '../Assests/23.jpg';
import img24 from '../Assests/24.jpg';
import img25 from '../Assests/25.jpg';
import img26 from '../Assests/26.jpg';
import img27 from '../Assests/27.jpg';
import img28 from '../Assests/28.jpg';
import img29 from '../Assests/29.jpg';

// Create an array for images
const images = [
    { src: img1, alt: "Annunciation" },
    { src: img2, alt: "cafe-terrace-at-night" },
    { src: img3, alt: "Fine-Wind" },
    { src: img4, alt: "Hokusai-Manga" },
    // { src: img5, alt: "Leonard-di-vinchi" },
    { src: img6, alt: "Marilyndiptych" },
    { src: img7, alt: "Memory of the Garden" },
    { src: img8, alt: "Mona-Lisa" },
    { src: img9, alt: "Picasso" },
    // { src: img10, alt: "Picasso-guernica" },
    { src: img11, alt: "The-last-supper" },
    { src: img12, alt: "Proto-cubism" },
    { src: img13, alt: "Rachel_by_Michelangelo" },
    { src: img14, alt: "Saint-Proculus" },
    { src: img15, alt: "Salla-delle-esse" },
    { src: img16, alt: "Portrait-of-GertrudeStein.jpeg" },
    { src: img17, alt: "Tsunami_by_hokusai" },
    { src: img18, alt: "vincent-van-gogh" },
    { src: img19, alt: "Beata-Beatrix-oil-canvas-Dante-Gabriel-Rossetti-1872" },
    { src: img20, alt: "edgeOfaWood-Van_Gogh" },
    { src: img21, alt: "himmel-s-0JDhPiZsdmc-unsplash" },
    { src: img22, alt: "Sarumaru-Dayu" },
    { src: img23, alt: "hokusai-Le-pont-du-japon" },
    { src: img24, alt: "Hokusai-Manga" },
    { src: img25, alt: "Hokusai-Oceans-of-Wisdom" },
    { src: img26, alt: "Le_Gourmet-Picasso" },
    { src: img27, alt: "Pablo_Picasso-La_soupe_(The_soup)" },
    { src: img28, alt: "hokusai-36views-of-mount-fouji" },
    { src: img29, alt: "Angel" },
];



function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (

        <div>

            <div className="contactspace1"></div>

            <div className="page-title"> <span> Collection </span> </div>

            <div>

            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullScreen, lgRotate, lgShare]} >
                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img  className="collectionImage" alt={image.alt} src={image.src} />
                        </a>
                    )
                })}

            </LightGallery>

            </div>

           




        </div>

    );
}
export default Gallery;