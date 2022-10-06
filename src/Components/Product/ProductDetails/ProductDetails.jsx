import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {id,title, image, description, price,category} = productDetails
    console.log(productDetails);
    return (
        <div className='container mx-auto absolute left-2/4 -translate-x-2/4 w-2/4 border border-orange-400 rounded-xl p-5 flex items-center justify-between mt-10 '>
        <img className='w-24' src={image} alt={title} />
        <div className="info ">
        <p>{title}</p>
           <p>{price}</p>
           <p>{description}</p>
        </div>
         
        </div>
    );
};

export default ProductDetails;
