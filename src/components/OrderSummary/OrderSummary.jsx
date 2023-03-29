import React from 'react';

const OrderSummary = ({item}) => {
    return (
        <div className='sticky top-0 rounded'>
            <h1 className='text-2xl font-bold text-center  '>Order Summary</h1>
               <div className='text-center mt-5'>
               <h3 >Selected Items: {item.length}</h3>
               </div>
        </div>
    );
};

export default OrderSummary;