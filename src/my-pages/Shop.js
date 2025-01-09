
//import {ProductList} from '../Data/ProductList';
import ProductCard from '../my-components/ProductCard';
import React, { useEffect, useState } from "react";
import axios from "axios";

function Shop() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://the-look-backend-app2.vercel.app/Paintings`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop-page">

      <div className="contactspace1"></div>

      <div className="page-title">
        <span> Store </span>
      </div>
      <div className="container-box">
        {
          product.map((product, key) => {
            return <ProductCard productObj={product} />
            // return <ProductCard paintingImage={product.paintingImage} paintingName={product.paintingName}  artistName={product.artistName}/>
          })
        }
      </div>
    </div>
  );
}
export default Shop;
