"use client";

import { StoreContext } from "@/app/context";
import OrderDetails from "@/app/Ui/Order/OrderDetails";
import Payment from "@/app/Ui/Order/Payment";

import { useContext } from "react";

export default function CartPage() {
  const { cartData } = useContext(StoreContext);

  return (
    <div className="my-5 w-full">
      {cartData.length === 0 ? (
        <h2 className="text-center text-3xl">Your Cart is Empty</h2>
      ) : (
        <div>
          <h1 className="text-center text-2xl">Your Cart Details</h1>
          <OrderDetails />
          <Payment />
        </div>
      )}
    </div>
  );
}
