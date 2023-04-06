import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderReview = ({pd,removeFromCartBtn}) => {
    console.log(pd)
    const{img,id, price,quantity,name}=pd
    return (
        <div className='flex border-2 m-5'  >
            <div className=' items-center p-5 '>
                <img className='w-32 h-32 ' src={img} alt="" />

            </div>
            
            <div className='grid grid-cols-2 gap-96  items-center justify-between  '>
               <div className='ml-5'>
                <h1 className='text-lg font-bold'>{name}</h1>
               <h3 className='font-semibold'>Price: ${price}</h3>
                <h3 className='font-semibold'>Quantity: {quantity}</h3>
               </div>
               <div>
               <button onClick={()=>removeFromCartBtn(id)} className='border-2 border-red-200 p-3 rounded-full bg-red-300 text-center hover:border-red-600'><FontAwesomeIcon className='text-4xl text-red-800 text-center' icon={faTrash} /></button>
               </div>
               </div>
        </div>
    );
};

export default OrderReview;