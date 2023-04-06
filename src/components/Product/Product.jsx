import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   
    const addToCartBtn = props.addToCartBtn
    const { img, name, price, seller, ratings
    } = props.product;
    return (
        <>
            <div className=''>
                <div className="card card-compact w-full h-[510px] bg-base-100 shadow-xl relative">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h5 className='text-xl font-bold'>Price: ${price}</h5>
                        <p className='text-lg'>Manufacturer: {seller}</p>
                        <p className='text-lg'>Rating: {ratings}</p>
                        <div className="card-actions justify-end    ">
                            <button onClick={ ()=> addToCartBtn(props.product)} className="btn hover:border-amber-600 bg-amber-500 border-amber-500 hover:bg-amber-600 w-full ">Add To Cart 
                            <FontAwesomeIcon className='text-xl ml-5 text-center' icon={faShoppingCart} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Product;