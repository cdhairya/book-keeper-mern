import React from "react";

const BookItem = ({ book }) => {
  const { title, author, publishYear } = book;
  return (
    <div
      key={book._id}
      className="flex justify-between items-start border-b shadow-lg border-gray-200 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
    >
      <div>
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-500">{book.author}</p>
      </div>
      <p className="text-sm text-gray-500">Published: {book.publishYear}</p>
    </div>
  );
};

export default BookItem;
