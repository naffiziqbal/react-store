import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const Cart = ({ product, dltCartBtn }) => {
  const { id, title, quantity, price, image } = product;
  return (
    <div className="border container mx-auto p-5 justify-between flex">
      <div className="product_info flex items-center text-start ">
        <img className="w-16 mr-10" src={image} alt={title} />
        <div className="flex  flex-col ">
          <p>{title}</p>
          <div className="flex flex-row justify-between">
          <p>Quantity: {quantity}</p>
          <p > Price : {price}</p>
          </div>
        </div>
      </div>
        <TrashIcon className="w-6" onClick={()=> dltCartBtn(id)}/>
    </div>
  );
};

export default Cart;
