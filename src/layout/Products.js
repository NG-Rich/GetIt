import React, { Fragment } from "react";
import { iphone, ps5, toryburchbag } from "../assets";

const products = [
  {
    name: "iPhone X",
    price: "$499.99",
    image: iphone
  },
  {
    name: "PlayStation 5",
    price: "$599.99",
    image: ps5
  },
  {
    name: "Tory Burch Women's Walker Small Satchel",
    price: "$378.00",
    image: toryburchbag
  }
]

function handleClick(e) {
  e.preventDefault();
  console.log("I was clicked!");
}

const Products = () => (
  <Fragment>
    <h1>
      Products
    </h1>
    <ul className="grid grid-cols-3 gap-5 m-5 p-2">
      {products.map((product) => (
        <div key={product.name} className="container box-border p-4 border-2 border-gray-400">
          <li className="flex-col flex-wrap content-center text-center">
            <img src={product.image} alt={product.name}></img>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
            onClick={(e) => handleClick(e)}
            className="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white font-bold px-2 rounded-full" type="submit">Add to cart</button>
          </li>
        </div>
      ))}
    </ul>
  </Fragment>
);

export default Products;