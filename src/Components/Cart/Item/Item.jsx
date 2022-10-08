import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../../fakedb";
import Cart from "../Cart";

const Item = () => {
  const { product, storedCart } = useLoaderData();
console.log(product);

  const [cart, setCart] = useState(storedCart);

  const dltCartBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
    console.log(remaining);
  };

  return (
    <div className="text-center">
      <p>{product}</p>
      <p>Saved: {storedCart.length} </p>
      {storedCart.map((product, idx) => (
        <Cart key={idx} product={product} dltCartBtn={dltCartBtn} />
      ))}
      {/* <p>Stored Cart: {storedCart.length}</p> */}
      {/* <p> Product: {product.length}</p> */}
    </div>
  );
};

export default Item;
