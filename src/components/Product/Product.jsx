import React from 'react';

const Product = (props) => {
    console.log(props.product)
    const{img,name,price,seller,ratings
    }=props.product;
    return (
        <>
        <div className=''>
            <div className="card card-compact w-full bg-base-100 shadow-xl relative">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h5 className='text-xl font-bold'>Price: ${price}</h5>
                    <p className='text-lg'>Manufacturer: {seller}</p>
                    <p className='text-lg'>Rating: {ratings}</p>
                    <div className="card-actions justify-end    ">
                        <button className="btn btn-primary w-full ">Add To Cart</button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Product;