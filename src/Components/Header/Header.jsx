import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow p-5 text-center'>
            <ul>
                <Link className='mr-10  hover:text-amber-400 duration-150' to = "/home" >Home</Link>
                <Link className='mr-10  hover:text-amber-400 duration-150' to = " " >Category</Link>
                <Link className='mr-10  hover:text-amber-400 duration-150' to = "/cart" >Cart</Link>
                <Link className='mr-10  hover:text-amber-400 duration-150' to = "/about" >About</Link>
                <Link className='mr-10  hover:text-amber-400 duration-150' to = "/login" >Sign up / Log in</Link>
            </ul>
        </div>
    );
};

export default Header;
