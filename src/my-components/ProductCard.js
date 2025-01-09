import { Link } from 'react-router-dom';

function ProductCard({productObj } ){

    return(
        <div className="card">
            
            <img src={productObj.paintingImage} alt={productObj.paintingName}  />

            <h1> {productObj.paintingName} </h1>
            <p>    ${productObj.price}</p>

            <Link to={`/PaintingDetails/${productObj._id}`}><button> View Details</button> </Link>

        </div>

    );
}
export default ProductCard;