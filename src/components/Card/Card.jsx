import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';

const Card = () => {
    const [card ,setCard]=useState([]);
    const [item ,setItem]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])

    const addToCartBtn = (product)=>{
        const newItems = [...item, product]
        setItem (newItems)

    }

    return (
        <>
        <div className='flex w-full max-w-7xl mx-auto mt-12  '>
            <div className='w-[80%] grid grid-cols-3 gap-4'>
                

                {
                    card.map(product=> <Product product={product} key={product.id} addToCartBtn={addToCartBtn}></Product>)
                }

            </div>
            <div className='w-[20%] bg-amber-200 rounded'>
                <OrderSummary item={item}></OrderSummary>
            </div>
        </div>
            
        </>
    );
};

export default Card;