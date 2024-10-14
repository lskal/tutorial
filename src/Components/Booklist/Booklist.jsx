import React from "react";
import Book from "./Book";
import { bestSellers } from "./Book";

const Booklist = () => {
  return (
    <>
      {bestSellers.map((book, index) => (
        <div key={index}>
          <Book
            imageSrc={book.imgSrc}
            title={book.title}
            author={book.author}
          />
        </div>
      ))}
    </>
  );
};

export default Booklist;
