import React from 'react';
import image from '../images/Logo.svg'
const Header = () => {
    return (
        <div className='text-white w-full max-w-7xl mx-auto shadow-2xl '>
            <div className="navbar bg-black rounded">
                <div className="flex-1">
                   
                    <img src={image} alt="logo" />
                </div>
                
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Order</a></li>
                        <li tabIndex={0}>
                         
                           
                        </li>
                        <li><a>Order Review</a></li>
                        <li><a>Log in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;