import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product, addItemToCart }) => {
  // console.log(addItemToCart);
  const { id, title, price, description, category } = product;
  // console.log(product.id);

  return (
    <div className="border-amber-300 border rounded-md   h-full flex flex-col  justify-end">
      <div className="product  pt-5 px-5 flex flex-col items-center ">
        <img className="p-5" src={product.image} alt={product.title}></img>
        <div className="product_info">
          <h1>
            <strong>
              Title: <Link to={`/product/${id}`}> {title}</Link>
            </strong>
          </h1>
          <h1>
            <strong> Price: </strong>
            {price}
          </h1>
          <h1>
            <strong> Description: </strong>
            {description.length === 100
              ? description
              : description.slice(0, 100)}
            ....
          </h1>
          <h1>
            <strong> Category </strong> {category}
          </h1>
        </div>
      </div>
      <button
        className="w-full bg-orange-400 text-lg text-white rounded-md  p-1"
        onClick={() => addItemToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
