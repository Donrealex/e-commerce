import React from 'react'
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const ProductPage = () => {
  const price = 125.00;
    const [qty, setQty] = useState(1);
     const [isCartOpen, setIsCartOpen] = useState(false);
      const product = {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        price: price,
        image: "public/Assets/image-product-2-thumbnail.jpg",
      };
  return (
    <section className="font-com h-screen container items-center px-16 py-10 grid grid-cols-2 w[50%_50%]">
      {/* LEFT SIDE */}
      <div className="space-y-6 ">
        <h4 className="font-bold">SNEAKER COMPANY</h4>
        <h1 className="font-bold text-2xl">Fall Limited Edition Sneakers</h1>
        <p className="">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a soft leather upper, durable rubber outer sole, and classic
          design — they'll match with almost anything in your closet.
        </p>
        <span className="flex gap-5 text-xl ">
          <h1 className="font-bold ">${price.toFixed(2)}</h1>
          <h3 className="font-bold">{price - 75}%</h3>
          <h3 className="text-gray-400 line-through font-bold">
            ${(price * 2).toFixed(2)}
          </h3>
        </span>
        {/* quantity and add to cart */}
        <div className="flex gap-8 items-between">
          {/* +&- button */}
          <div className=" h-10 flex gap-4 items-center p-4 w-25 justify-between bg-gray-200 rounded-lg font-bold text-xl">
            <button
              onClick={() => {
                qty <= 1 ? setQty(1) : setQty(qty - 1);
              }}
              className="text-primary"
            >
              -
            </button>

            <p className="">{qty}</p>

            <button
              onClick={() => {
                setQty(qty + 1);
              }}
              className="text-primary"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex h-10 gap-4 items-center p-4 bg-primary rounded-md hover:bg-orange-500"
          >
            <ShoppingCart />
            Add to cart
          </button>
        </div>
        {isCartOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/35 backdrop-blur z-50">
            {/* Popup */}
            <div className="bg-white rounded-2xl shadow-xl w-1/2 max-w-xl h-[60%] p-6 flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-400 pb-3">
                <h2 className="text-xl font-bold text-gray-700">Your Cart</h2>
                <span
                  className="text-gray-500 font-bold hover:cursor-pointer hover:text-primary"
                  onClick={() => setIsCartOpen(false)}
                >
                  ✕
                </span>
              </div>

              {/* Cart Item */}
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  ${product.price} × {qty} =
                  <span className="font-semibold">${product.price * qty}</span>
                </p>
              </div>

              {/* Product Footer */}
              <div className="mt-4 border-t border-gray-400 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">Total:</span>
                <span className="text-lg font-bold text-gray-700">
                  ${product.price * qty}
                </span>
              </div>

              <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-orange-500 transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductPage