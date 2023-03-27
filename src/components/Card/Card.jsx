import React, { useEffect, useState } from 'react';

const Card = () => {
    const [card ,setCard]=useState([]);
    useEffect(()=>{
        fetch('')
    },[])
    return (
        <>
        <div className='flex w-full max-w-7xl mx-auto mt-12 '>
            <div className='w-[80%] bg-red-500'>
                <h1>Hello</h1>

            </div>
            <div className='w-[20%] bg-black'>
                <h1>mello</h1>

            </div>
        </div>
            
        </>
    );
};

export default Card;