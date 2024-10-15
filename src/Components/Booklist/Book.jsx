import React from "react";
import styled from "styled-components";

export const bestSellers = [
  {
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/81wThrp1YyL._AC_UL600_SR600,400_.jpg",
    title: "From Here to the Great Unknown: Oprah's Book Club: A Memoir",
    author: "Lisa Marie Presley",
  },
  {
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/61ZRi-MxTLL._AC_UL600_SR600,400_.jpg",
    title: "War",
    author: "Bob Woodward",
  },
  {
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/71jfsEP8G4L._AC_UL600_SR600,400_.jpg",
    title: "Spooky Cutie: Coloring Book for Adults and Teens",
    author: "Coco Wyo",
  },
];

const Book = ({ imageSrc, title, author }) => {
  const Image = () => <img src={imageSrc} alt={title} />;
  const Title = () => {
    return <h2>{title}</h2>;
  };
  // INLINE css Author Component
  /*  const Author = () => (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      {author}
    </h4>
  ); */
  // STYLED CSS Author Component
  const Author = styled.h4`
    color: "#617d98";
    font-size: "0.75rem";
    margin-top: "0.5rem";
  `;

  return (
    <article className="book">
      <Image />
      <Title />
      <Author>{author}</Author>
    </article>
  );
};

export default Book;
