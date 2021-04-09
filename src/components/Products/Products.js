import React, { useState } from 'react';
import './Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const pd = props.pd;

    return (
        <div className="col-md-4" >
            <div className="card" >
                <img src={pd.images} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{pd.name}</h5>
                    <p className="card-text">{pd.price}</p>
                    <button onClick={()=>{props.handleBuyProduct(pd)}} className="btn btn-primary"><Link to={'/checkout/'+pd._id}>Buy Now</Link></button>
                </div>
            </div>
        </div>

    )
};

export default Products;