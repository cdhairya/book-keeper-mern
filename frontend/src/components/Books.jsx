import React from "react";
import BookItem from "./BookItem";

const Books = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookItem book={book} key={book._id} />
      ))}
    </>
  );
};

export default Books;
