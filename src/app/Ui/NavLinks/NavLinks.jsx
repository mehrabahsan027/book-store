"use client";

import { StoreContext } from "@/app/context";
import Link from "next/link";
import { useContext } from "react";

export default function NavLinks() {
  const { cartData } = useContext(StoreContext);
  const links = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/store" },
    { name: "Sell or Lend", path: "/store" },
    { name: "Cart", path: "/store/cart" },
    { name: "Track Order", path: "/store/track-order" },
    { name: "Community", path: "/store/communities" },
    { name: "About", path: "/store/about" },
    { name: "Admin", path: "/store" },
  ];
  return (
    <ul className="flex gap-x-3 sm:gap-x-0 flex-wrap justify-center sm:flex-col sm:text-xl gap-y-5 mt-3 text-center">
      {links.map((item) => {
        return (
          <li key={item.name} className="border rounded-md border-teal-900 w-fit sm:w-60 p-3">
            {item.name == "Cart" ? (
              <Link href={item.path}>{`${item.name} (${cartData.length})`}</Link>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
