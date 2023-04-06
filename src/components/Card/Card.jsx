import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilities/fakedb';
const Card = () => {
    const [card ,setCard]=useState([]);
    const [item ,setItem]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        console.log('product yoy :',card)
        console.log(storedCart)
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = card.find(product => product.id === id)
            console.log("added on cart =",addedProduct)

            if(addedProduct){

                const  quantity = storedCart[id];
                addedProduct.quantity= quantity;
                console.log(quantity)
                savedCart.push(addedProduct)
            }
        }

        setItem(savedCart);
        console.log(savedCart)



    },[card])

    const addToCartBtn = (product)=>{
        // const newItems = [...item, product]

        let newItems=[];
        const exists = item.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity=1;
            newItems= [...item,product]
        }
        else{
            exists.quantity = exists.quantity+1;
            const remaining = item.filter(pd=> pd.id !== product.id);
            newItems= [...remaining,exists]
        }
        setItem (newItems)
        addToDb(product.id)


    }

    const clearCartBtn =()=>{
        setItem([])
        deleteShoppingCart()
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
                <OrderSummary item={item} clearCartBtn={clearCartBtn}></OrderSummary>
            </div>
        </div>
            
        </>
    );
};

export default Card;