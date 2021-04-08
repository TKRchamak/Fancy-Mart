import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';


const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://blooming-reef-12376.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    })
    return (
        <div className="container ">
            <div className="row">
                {
                    product.map(pd => <Products key={pd._id} pd={pd}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;