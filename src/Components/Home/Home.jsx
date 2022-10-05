import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect( ()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => setData(products))
    },[])
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2  gap-5 md:p-5 px-24 md:container mx-auto'>
            {
                data.map(product => <Product key={product.id} product = {product} />)
            }
        </div>
    );
};

export default Home;
