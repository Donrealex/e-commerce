import React from 'react'
import { useState } from "react";

const ProductPage = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="h-screen container items-center px-16 py-10 grid grid-cols-2 w[50%_50%]">
      <div className="space-y-6 ">
        <h4 className="font-bold">SNEAKER COMPANY</h4>
        <h1 className="font-bold text-2xl">Fall Limited Edition Sneakers</h1>
        <p className="">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a soft leather upper, durable rubber outer sole, and classic
          design — they'll match with almost anything in your closet.
        </p>
        <span className="flex gap-5 text-2xl ">
          <h1 className="font-bold ">$125.00</h1>
          <h3 className="font-bold">50%</h3>
          <h3 className="text-gray-400 line-through font-bold">$250.00</h3>
        </span>
        <div className="flex gap-4 items-center">
          <div className=" h-10 flex items-center p-4 w-25 justify-between bg-gray-200 rounded-lg">
            <button
              onClick={() => {
                count <= 0 ? setCount(0) : setCount(count - 1);
              }}
              className=" font-extrabold text-xl text-orange-400"
            >
              -
            </button>
            <p className="font-bold text-xl">{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className=" font-bold text-xl text-orange-400"
            >
              +
            </button>
          </div>
          <button className="bg-orange-400 h-10 text-black p-4 rounded-lg flex items-center justify-center gap-3 hover:bg-orange-500">
            <img
              src="public\Assets\icon-cart.svg"
              alt="cart icon"
              className=""
            />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage