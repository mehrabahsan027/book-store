"use client";

import React from "react";
import { getBookById } from "@/app/lib/fake-data";
import Image from "next/image";

import { StoreContext } from "@/app/context";

import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function BookDetails({ params }) {
  const { cartData, setCartData } = useContext(StoreContext);

  const router = useRouter();

  const handleAddToCart = (reason) => {
    const addedBook = { ...book, type: reason };

    setCartData([...cartData, addedBook]);

    router.push("/store/cart");
  };

  const book = getBookById(params.id);

  return (
    <div className="flex flex-col items-center my-5  w-full">
      <div className="w-96 h-[480px] relative">
        <Image src={book.cover} fill 
        // style={{objectFit:'cover'}}
        />
      </div>

      <div>
        <h3 className="text-2xl text-center mb-4">{book.title}</h3>
        <p className="px-8">{book.description}</p>
        <p className="text-center text-xl">Genre: {book.genre}</p>
      </div>
      <div className="space-x-5 mt-4">
        <button
          onClick={() => handleAddToCart("Rent")}
          className="bg-blue-900 text-white px-5 py-3"
        >
          Rent for {book.rentPrice} BDT{" "}
        </button>
        <button
          onClick={() => handleAddToCart("Buy")}
          className="bg-blue-900 text-white px-5 py-3"
        >
          Buy for {book.sellPrice} BDT{" "}
        </button>
      </div>
    </div>
  );
}
