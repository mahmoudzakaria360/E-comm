"use client";

import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  // Static data (you can replace later with real data)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      brand: "Nike",
      price: 120,
      image: "/shoe1.png",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      brand: "Adidas",
      price: 150,
      image: "/shoe2.png",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDE - ITEMS */}
        <div className="col-span-8 space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-xl shadow-sm"
              >
                {/* Image + Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                </div>

                {/* Price + Remove */}
                <div className="text-right">
                  <p className="font-bold mb-2">${item.price}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Clear Cart Button */}
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="col-span-4">
          <div className="border p-4 rounded-xl shadow-sm sticky top-6">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">${totalPrice}</span>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
