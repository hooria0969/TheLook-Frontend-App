import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFadeText from '../my-components/ScrollFadeText';
import img_1 from '../Assests/img_1.jpg'
import img_2 from '../Assests/img_2.jpg'
import img_3 from '../Assests/img_3.jpg'
import img_4 from '../Assests/img_4.jpg'
import img_5 from '../Assests/img_5.jpg'
import hammer from '../Assests/hammer.png'
import paint_icon from '../Assests/paint_icon.png'
import brush_icon from '../Assests/brush_icon.png'

function Home() {
    return (

        <div>


            <div className="headbox">
                <ScrollFadeText />

            </div>
            <div className="hero">
                <div className="box">
                    <div className="slider">
                        <img src={img_1} alt="PIC 1" />
                        <img src={img_2} alt="PIC 2" />
                        <img src={img_3} alt="PIC 3" />
                        <img src={img_4} alt="PIC 4" />
                        <img src={img_5} alt="PIC 5" />

                    </div>
                </div>
            </div>


            <div className="space1">space</div>


            {/* SCULPTURE PAGE STARTS */}

            <p className="sculphead">OUR SCULPTURES</p>
            <div className="dash"></div>
            <p className="sculpdef" >Explore our curated collection of sculptures, featuring a blend of classic and contemporary works</p>

            <div className="sculp2box">
                <div className="sculpright"></div>
                <div className="sculpleft">
                    <p className='sculpleftHeading'>Masterpieces in Sculpture</p>
                    <div className="sculp6box">

                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>Masterful Artistry</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>Emotional Connection</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>Cultural Significance</li>
                        </div>


                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>  Timeless Beauty</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>Diverse Materials</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={hammer} alt="" /><li className='sculplist'>Inspiring Designs</li>
                        </div>


                    </div>

                    <Link to="/Gallery">  <a href="#"><button className='readbtn'>Read More</button></a> </Link>


                </div>

            </div>

            {/* SCULPTURE PAGE ENDS */}


            <div className="space2">space</div>



            {/* PAINTING PAGE STARTS */}

            <p className="sculphead">OUR PAINTINGS</p>
            <div className="dash"></div>
            <p className="sculpdef" >Explore a diverse collection of stunning paintings, from contemporary masterpieces to timeless classics</p>

            <div className="sculp2box">
                <div className="sculpleft">
                    <p className='sculpleftHeading'>Masterpieces in Paintings</p>

                    <div className="paint6box">

                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Timeless Classics</li>
                        </div>

                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Modern Masterpieces</li>
                        </div>

                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Abstract Expressions</li>
                        </div>


                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Serene Landscapes</li>
                        </div>

                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Captivating Portraits</li>
                        </div>

                        <div className="paintdes01">
                            <img src={paint_icon} alt="" /><li className='sculplist'>Colorful Narratives</li>
                        </div>

                        <Link to="/Gallery"> <a href="#"><button className='readbtn' id="paintReadBtn" >Read More</button></a> </Link>


                    </div>

                </div>

                <div className="paintright"> </div>

            </div>

            {/* PAINTING PAGE ENDS */}


            <div className="Space3"></div>




            {/* PRINTMAKERS PAGE STARTS */}


            <p className="sculphead">OUR PRINTMAKERS</p>
            <div className="dash"></div>
            <p className="sculpdef" >Explore a stunning collection of handcrafted prints, from intricate traditional designs to bold modern creations</p>

            <div className="sculp2box">
                <div className="printright"></div>
                <div className="sculpleft">
                    <p className='sculpleftHeading'>Masterpieces in Printmaking</p>
                    <div className="sculp6box">

                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Traditional Craftsmanship</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Modern Print Expressions</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Handcrafted Elegance</li>
                        </div>


                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Innovative Artistic Prints</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Handcrafted Elegance</li>
                        </div>

                        <div className="sculpdes01">
                            <img src={brush_icon} alt="" /><li className='sculplist'>Exquisite Etching Art</li>
                        </div>


                    </div>

                    <Link to="/Gallery">  <a href="#"><button className='readbtn'>Read More</button></a> </Link>


                </div>

            </div>


            {/* PRINTMAKERS PAGE ENDS */}

            <div className="dash1"></div>


            {/* page 3 ENDS */}



        </div>

    );
}
export default Home;