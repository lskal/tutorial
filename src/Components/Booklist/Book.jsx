import React from "react";

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
  const Author = () => <h4>{author}</h4>;

  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export default Book;
