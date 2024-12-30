import React from "react";
import { getAllBooks } from "../lib/fake-data";
import Books from "../Ui/Books/Books";

export default function store() {
  const books = getAllBooks();
  console.log(books);

  return <Books books={books} />;
}
