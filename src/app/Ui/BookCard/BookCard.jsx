import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "../AddToCart/AddToCart";



export default function BookCard({ book }) {
  return (

    <div className='border rounded-md mb-5 shadow-md shadow-teal-900 border-teal-950 p-5 h-[400px] flex flex-col items-center justify-between hover:scale-110 transition-all duration-300'>
    
    <Link href={`/store/${book.id}`}>
      <div >
      <div className='text-center '>
        <div className='w-[200px] h-[250px] relative mx-auto'>
        <Image alt={book.title} src={book.cover}
        fill  style={{objectFit:'cover'}} />
        </div>
     

      <h3 className='text-xl text-center py-3'>{book.title}</h3>
    </div>
  
    
      </div>
      
    </Link>
    <div>
      <AddToCart book={book}/>
    </div>
    
    </div>
 
   
  
  );
}
