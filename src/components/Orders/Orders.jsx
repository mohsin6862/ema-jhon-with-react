import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { removeFromDb } from '../Utilities/fakedb';

const Orders = () => {
    const products = useLoaderData()
    const [cart,setCart]=useState(products)

    const removeFromCartBtn =(id)=>{
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)

    }

    return (
        <div className='flex w-full max-w-7xl mx-auto mt-12  '>
            <div className='w-[80%] max-w-4xl mx-auto p-5'>
                {
                   cart.map(pd => <OrderReview key={pd.id} pd={pd} removeFromCartBtn={removeFromCartBtn}></OrderReview>)
                }

            </div>

            <div className='w-[20%] bg-amber-200 rounded'>
            <OrderSummary item={cart}></OrderSummary>
           

            </div>

        </div>
    );
};

export default Orders;