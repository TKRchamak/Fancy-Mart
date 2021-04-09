import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const { id } = useParams();
    const [buyProduct, setBuyProduct] = useState([]);
    const fastPro = buyProduct[0];

    useEffect(() => {
        fetch('https://blooming-reef-12376.herokuapp.com/checkout/' + id)
            .then(res => res.json())
            .then(data => setBuyProduct(data))
    }, [])

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>{fastPro.name}</td>
                        <td>{fastPro.price}</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;