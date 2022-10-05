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
        <div className='grid grid-cols-3 gap-5 p-5 container mx-auto'>
            {
                data.map(product => <Product key={product.id} product = {product} />)
            }
        </div>
    );
};

export default Home;
