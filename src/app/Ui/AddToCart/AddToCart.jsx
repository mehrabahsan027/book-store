"use client";

import { StoreContext } from "@/app/context";
import React from "react";

import { useContext } from "react";

export default function AddToCart({ book }) {
  const { cartData, setCartData } = useContext(StoreContext);
  console.log(cartData);

  const handleAddToCart = (reason) => {
    const addedBook = { ...book, type: reason };

    setCartData([...cartData, addedBook]);
  };

  return (
    <div className="space-x-4 font-semibold">
      <button
        onClick={() => handleAddToCart("Buy")}
        className="px-4 py-2 border hover:bg-teal-900 border-teal-900 bg-teal-950 text-yellow-100 rounded-md"
      >
        Buy
      </button>
      <button
        onClick={() => handleAddToCart("Rent")}
        className="px-4 py-2 border hover:bg-teal-900 border-teal-900 bg-teal-950 text-yellow-100 rounded-md"
      >
        Rent
      </button>
    </div>
  );
}
