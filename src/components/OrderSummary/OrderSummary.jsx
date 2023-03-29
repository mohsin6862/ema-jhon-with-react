import React from 'react';

const OrderSummary = ({item}) => {

    console.log(item)
    let total =0;
    let shippingCost = 0;
    for (const cart of item){
        total = total + cart.price
        shippingCost = shippingCost + cart.shipping
    }

    const tax = total * 5 / 100;
    const grandTotal= total + shippingCost+ tax;
    return (
        <div className='sticky top-0 rounded  '>
            <h1 className='text-2xl font-bold text-center mt-12 '>Order Summary</h1>
               <div className='ml-5 mt-8 text-lg font-semibold items-start'>
               <h3 >Selected Items: {item.length}</h3>
               <h3>Price: ${total}</h3>
               <h3>Shipping Cost: ${shippingCost}</h3>
               <h3>Tax: ${tax.toFixed(2)} </h3>
               <hr className='mt-3' />
               <h2 className=' font-bold mt-5'>Grand total: ${grandTotal.toFixed(2)}</h2>
               </div>
        </div>
    );
};

export default OrderSummary;