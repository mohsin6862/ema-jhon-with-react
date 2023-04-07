import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { deleteShoppingCart, removeFromDb } from '../Utilities/fakedb';
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const products = useLoaderData()
    const [cart,setCart]=useState(products)

    const removeFromCartBtn =(id)=>{
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)

    }

    const clearCartBtn =()=>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='flex w-full max-w-7xl mx-auto mt-12  '>
            <div className='w-[80%] max-w-4xl mx-auto p-5'>
                {
                   cart.map(pd => <OrderReview key={pd.id} pd={pd} removeFromCartBtn={removeFromCartBtn}></OrderReview>)
                }

            </div>

            <div className='w-[20%] bg-amber-200 rounded'>
            <OrderSummary item={cart} clearCartBtn={clearCartBtn } >
                 <div className='m-2'>    
                <Link to='/checkout'>
                <button className="btn  w-full mt-5 bg-amber-600 border-amber-600 hover:bg-amber-700">Proceed To Checkout
                    <FontAwesomeIcon className='text-xl text-center ml-5' icon={faCreditCard} />
                </button>
                </Link>
                 </div>
                 </OrderSummary>
           

            </div>

        </div>
    );
};

export default Orders;