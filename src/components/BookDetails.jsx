import React, { useState, useEffect } from "react";
import "../styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BOOK_DETAILS_URL } from "./API";
import { useAppContext } from "./context/appContext";
const BookDetails = () => {
  const [book, setBook] = useState({});
  const {
    favorites,
    addToFavorites,
    setMountedComponentHandler,
    removeFromFavorites
  } = useAppContext();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  React.useEffect(() => {
    setMountedComponentHandler("fav");

    return () => setMountedComponentHandler("main");
  }, []);

  return (
    <div className="book-details">
      <div>
        <div class="title">
          <h2>{book?.title}</h2>
        </div>
        <img src={book?.image_url} alt="#"></img>
        <div className="author">
          <h2>Authors</h2>
          <p>{book?.authors}</p>
        </div>
      </div>
      <div className="book-description">
        <h2>Description</h2>
        <p>{book?.description}</p>

        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  );
};
export default BookDetails;
