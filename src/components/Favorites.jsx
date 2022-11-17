import React from "react";
import "../styles.css";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const {
    favorites,
    addToFavorites,
    setMountedComponentHandler,
    removeFromFavorites
  } = useAppContext();

  //Extracting them from components for use
  console.log("favorites are:", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  React.useEffect(() => {
    setMountedComponentHandler("fav");

    return () => setMountedComponentHandler("main");
  }, []);

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1> NO Favorites </h1>
      )}
    </div>
  );
};
export default Favorites;
