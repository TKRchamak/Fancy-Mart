import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=" container">
            <div className="header">
                <h1><Link to='/Home'>Fancy Mart</Link></h1>
                <nav>
                    {/* <Link to='/Home'>{loggedInUser.displayName}</Link> */}
                    <Link to='/Home'>Home</Link>
                    <Link to='/addProduct'>Add Product</Link>
                    <Link to='/checkout'>Checkout</Link>
                    <Link to='/manage'>Manage Product</Link>
                    <button className='btn'><Link to='/Login'>Sign In</Link></button>
                </nav>
            </div>
        </div>
    );
};

export default Header;