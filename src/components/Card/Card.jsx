import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Card = () => {
    const [card ,setCard]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    return (
        <>
        <div className='flex w-full max-w-7xl mx-auto mt-12  '>
            <div className='w-[80%] grid grid-cols-3 gap-4'>
                

                {
                    card.map(product=> <Product product={product}></Product>)
                }

            </div>
            <div className='w-[20%] '>
                <h1 className='text-2xl font-bold text-center'>Order Summary</h1>

            </div>
        </div>
            
        </>
    );
};

export default Card;