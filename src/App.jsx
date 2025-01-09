import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './my-components/NavBar.js';
import Home from './my-pages/Home.js';
import Gallery from './my-pages/Gallery.js';
import Artist from './my-pages/Artist';
import ArtistDetails from './my-pages/ArtistDetails';
import Shop from './my-pages/Shop.js';
import PaintingDetails from './my-pages/PaintingDetails.js';
import Contact from './my-pages/Contact.js'
import Footer from './my-components/Footer.js';

function App() {
  
  return (
    <Router>

    <NavBar/>

      <Routes>
         <Route path="/" element={<Home />} />  
         <Route path="/Gallery" element={<Gallery />} />  
         <Route path="/Artists" element={<Artist />} />  
         <Route path="/ArtistDetails/:id" element={<ArtistDetails />} />
         <Route path="/Shop" element={<Shop />} />
         <Route path="/PaintingDetails/:id" element={<PaintingDetails/>} />
         <Route path="/Contact" element={<Contact />} />
        
      </Routes>

    <Footer/>

    </Router>
  );
}

export default App;
