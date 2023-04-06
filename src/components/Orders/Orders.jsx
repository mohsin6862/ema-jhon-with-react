import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const products = useLoaderData()

    return (
        <div className='flex w-full max-w-7xl mx-auto mt-12  '>
            <div className='w-[80%] max-w-4xl mx-auto p-5'>
                {
                    products.map(pd => <OrderReview key={pd.id} pd={pd}></OrderReview>)
                }

            </div>

            <div className='w-[20%] bg-amber-200 rounded'>
            <OrderSummary item={products}></OrderSummary>
           

            </div>

        </div>
    );
};

export default Orders;