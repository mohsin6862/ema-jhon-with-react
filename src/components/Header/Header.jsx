import React from 'react';

const Header = () => {
    return (
        <div className='text-white'>
            <div className="navbar bg-black">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Ema-Jhon</a>
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