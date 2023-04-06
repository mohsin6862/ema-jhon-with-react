import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const OrderReview = ({pd}) => {
    console.log(pd)
    const{img,id, price,quantity}=pd
    return (
        <div>
            <div className='border-2 flex items-center '>
                <img className='w-32 h-32 ' src={img} alt="" />

               <div className='flex items-center justify-between'>
               <div className='ml-5'>
               <h3>Price: {price}</h3>
                <h3>Quantity: {quantity}</h3>
               </div>
               <div>
                
               <button><FontAwesomeIcon className='text-2xl' icon={faCoffee} /></button>
               </div>
               </div>
            </div>
        </div>
    );
};

export default OrderReview;