import React from "react";
import Book from "./Book";
import { bestSellers } from "./Book";
import "../../Styles/index.css";

const Booklist = () => {
  return (
    <>
      {bestSellers.map((book, index) => (
        <section className="booklist" key={index}>
          <Book
            imageSrc={book.imgSrc}
            title={book.title}
            author={book.author}
          />
        </section>
      ))}
    </>
  );
};

export default Booklist;
