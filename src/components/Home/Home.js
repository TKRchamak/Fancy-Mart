import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';


const Home = () => {
    const [product, setProduct] = useState([]);
    const [buyProduct, setBuyProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log('this is  buy products',buyProduct);

    useEffect(() => {
        fetch('https://blooming-reef-12376.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    
    const handleBuyProduct = (buyPd) => {
        const newBuy = [...buyProduct, buyPd];
        setBuyProduct(newBuy);
    }


    return (
        <div className="container ">
            <div className="row">
                {
                    product.map(pd => <Products handleBuyProduct={handleBuyProduct} key={pd._id} pd={pd}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;