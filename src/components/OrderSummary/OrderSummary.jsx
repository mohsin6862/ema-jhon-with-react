import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const OrderSummary = ({ item, clearCartBtn, children }) => {

    console.log(item)
    let total = 0;
    let quantity = 0;
    let shippingCost = 0;
    for (const cart of item) {
        // if(cart.quantity===0){
        //     cart.quantity = 1
        // }
        total = total + cart.price * cart.quantity
        shippingCost = shippingCost + cart.shipping
        quantity = quantity + cart.quantity
    }

    const tax = total * 5 / 100;
    const grandTotal = total + shippingCost + tax;
    return (
        <div className='sticky top-0 rounded mb-5 '>
            <h1 className='text-2xl font-bold text-center mt-12 '>Order Summary</h1>
            <div className='ml-5 mt-8 text-lg font-semibold items-start'>
                <h3 >Selected Items: {quantity}</h3>
                <h3>Price: ${total}</h3>
                <h3>Shipping Cost: ${shippingCost}</h3>
                <h3>Tax: ${tax.toFixed(2)} </h3>
                <hr className='mt-3' />
                <h2 className=' font-bold mt-5'>Grand total: ${grandTotal.toFixed(2)}</h2>
            </div>
            <div className='m-2'>

                <button onClick={clearCartBtn} className="btn  hover:bg-red-800 w-full mt-12 bg-red-600 border-red-600">Clear Cart
                    <FontAwesomeIcon className='text-xl text-center ml-5' icon={faTrashAlt} />
                </button>
           
            </div>
            {children}
        </div>
    );
};

export default OrderSummary;