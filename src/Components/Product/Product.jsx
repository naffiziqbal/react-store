import React from "react";
import "./Product.css";

const Product = ({ product, addItemToCart }) => {
  // console.log(addItemToCart);
  const { title, price, description, category } = product;
  return (
    <div className="border-amber-300 border rounded-md   h-full flex flex-col  justify-end">
      <div className="product  pt-5 px-5 flex flex-col items-center ">
        <img className="p-5" src={product.image} alt={product.title} />
        <div className="product_info">
          <h1>
            {" "}
            <strong> Title: </strong>
            {title}
          </h1>
          <h1>
            {" "}
            <strong> Price: </strong>
            {price}
          </h1>
          <h1>
            {" "}
            <strong> Description: </strong>{" "}
            {description.length === 100
              ? description
              : description.slice(0, 100)}{" "}
            ....
          </h1>
          <h1>
            {" "}
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
