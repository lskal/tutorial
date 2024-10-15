import React from "react";
import Book from "./Book";
import { bestSellers } from "./Book";
import "../../Styles/index.css";

const Booklist = () => {
  return (
    <section className="booklist">
      {bestSellers.map((book, index) => (
        <Book
          imageSrc={book.imgSrc}
          title={book.title}
          author={book.author}
          key={index}
        />
      ))}
    </section>
  );
};

export default Booklist;
