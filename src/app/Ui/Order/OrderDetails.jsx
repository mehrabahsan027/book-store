'use client'


import React from "react";
import {useContext} from 'react'

import { StoreContext } from "@/app/context";

export default function OrderDetails() {

    const { cartData,setCartData} = useContext(StoreContext)

    const booksToBuy = cartData.filter((item)=> item.type =='Buy')
    const priceToBuy = booksToBuy.reduce((acc,book)=> acc+book.sellPrice,0)
    const booksToRent = cartData.filter((item)=> item.type =='Rent')
    const priceToRent = booksToRent.reduce((acc,book)=> acc+book.rentPrice,0)

    const totalPrice = priceToBuy + priceToRent




  return (
    <div className="bg-yellow-100  shadow-md mt-5 px-5 py-5 border rounded-md mx-10">
      <h2 className="text-xl font-medium  text-center underline underline-offset-8">
        Order Details
      </h2>
      <div className='flex flex-col gap-y-3 my-5 text-xl items-center'>
        <p>Buy {booksToBuy?.length} books only for <span className='font-semibold'>{priceToBuy}</span>  BDT </p>
        <p>Rent {booksToRent?.length} books only for <span className='font-semibold'>{priceToRent}</span> BDT </p>
        <hr className="h-0.5 w-72  bg-gray-200 border-0 dark:bg-gray-900"/>
        <p>Total Price: <span className='ml-10 font-semibold'>{totalPrice} BDT</span> </p>
      </div>

      <div className='bg-red-600 px-5 py-2 text-white w-fit mx-auto rounded-md font-semibold'><button onClick={()=> setCartData([])}>Reset Cart</button></div>
    </div>
  );
}
