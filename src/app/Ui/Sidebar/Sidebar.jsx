import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";

export default function Sidebar() {
  return (
    <aside className='flex flex-col px-6 py-5 '>
      <Link className='mx-auto sm:mx-0' href="/store">
        <Logo />


      </Link>

      <NavLinks/>




    </aside>
  );
}
