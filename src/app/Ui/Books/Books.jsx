import React from "react";
import BookCard from "../BookCard/BookCard";

export default function Books({ books }) {
  return (
    <div className="text-center  mt-5 flex  flex-wrap flex-col sm:flex-row justify-center items-center gap-10   ">
      {books?.map((item) => {
        return <BookCard book={item} />;
      })}
    </div>
  );
}
