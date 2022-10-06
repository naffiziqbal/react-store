import { TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Item = ({item}) => {
    return (
        <div>
            <li>{item.title} </li>
                    <li>Price</li>
                    <li><TrashIcon  className='w-4 text-orange-400'/></li>
        </div>
    );
};

export default Item;
