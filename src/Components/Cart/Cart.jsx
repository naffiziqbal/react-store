import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import Item from './Item/Item';


const Cart = ({cart}) => {

    
    return (
        <div className='container mx-auto bg-slate-100'>
         <div className="cart-header flex justify-between  bg-slate-300 p-5 font-semibold">
         <p className=''>List Of You Items</p>
         <p><TrashIcon  className='w-6 text-orange-400'/></p>

         </div>
            <ol>
                <div className='mt-10'>
                    {
                        cart.map(item=> <Item key={item.id} item={item}/>)
                    }
                </div>
            </ol>
        </div>
    );
};

export default Cart;
