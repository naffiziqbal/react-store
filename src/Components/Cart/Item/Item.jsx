import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Item = ({ item }) => {
  const productItems = useLoaderData()
  console.log(productItems);
  
  return (
    <div className="text-center">
      <table className="table w-full">
        <thead className="">
          <tr className="">
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.id}</td>
            <td><TrashIcon className="w-4 text-orange-400" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Item;
