import React, { useState } from 'react';
import './Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Products = ({ pd }) => {
    const [buyProduct,setBuyProduct] = useState({})
    const handleBuyProduct = () => {
        const productID = pd._id;
        const selectProduct = {...buyProduct,id: productID}
        setBuyProduct(selectProduct);
        console.log(buyProduct)
    }
    return (
        <div className="col-md-4" >
            <div className="card" >
                <img src={pd.images} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pd.name}</h5>
                    <p className="card-text">{pd.price}</p>
                    <a onClick={handleBuyProduct} className="btn btn-primary"><Link to='/checkout'>Buy Now</Link></a>
                </div>
            </div>
        </div>

    )
};

export default Products;