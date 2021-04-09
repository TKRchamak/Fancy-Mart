import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    const onSubmit = data => {
        console.log(data);
        const productData = {
            name: data.name,
            price: data.price,
            images: imageUrl
        }
        console.log(productData)
        const url = `https://blooming-reef-12376.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('yeas this is work', res))
    };

    const handleUploadImg = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '45f952941e812ef6c4d32fa44aef4a97');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputDesign">
                    <label htmlFor="ProductName">Product Name: </label>
                    <input id="ProductName" name="name" type="text" placeholder="Product Name" ref={register} />
                </div>
                <div className="inputDesign">
                    <label htmlFor="AddPrice">Add Price: </label>
                    <input id="AddPrice" name="price" type="number" placeholder="Add Price" ref={register} />
                </div>
                <div className="inputDesign">
                    <label htmlFor="Picture">Picture: </label>
                    <input id="Picture" type="file" placeholder="name" onChange={handleUploadImg} />
                </div>
                <input  className="btn btn-primary inputDesign" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;