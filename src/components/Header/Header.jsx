import React, { useContext } from 'react';
import image from '../images/Logo.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProvider';
const Header = () => {

    const {user,Logout}= useContext(UserContext)

    const handleLogout =()=>{

       Logout()
    }
    return (
        <div className='text-white w-full max-w-7xl mx-auto shadow-2xl '>
            <div className="navbar bg-black rounded">
                <div className="flex-1">
                   
                    <img src={image} alt="logo" />
                </div>
                
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/orders'>Order</Link></li>
                        <li><Link to='/inventory'>Inventory</Link></li>
                        <li><Link to='/login'>Log in</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                        <li>{
                        user &&
                         <span>{user.email} <li><button onClick={handleLogout}>Logout</button></li> </span> 
                        }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;