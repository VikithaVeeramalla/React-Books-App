import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useAppContext } from "./context/appContext";

const Navbar = () => {
  // const path = "https://zqq1cq.csb.app/";
  const {
    mounted_component,
    setMountedComponentHandler,
    favorites,
    addToFavorites,
    removeFromFavorites
  } = useAppContext();
  console.log(mounted_component, "mounted component");

  return (
    <div className="Navbar">
      {mounted_component === "fav" && (
        <div>
          <Link to="./">
            <img
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              className="back"
              alt="back"
            />
          </Link>
        </div>
      )}

      <div class="books">
        <Link to="./">
          <h1>React Books App</h1>
        </Link>
      </div>
      <Link to="./favorites">
        <h3>My Favorites: {favorites.length}</h3>
      </Link>
    </div>
  );
};
export default Navbar;
