import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be with in appContextProvider!");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [mounted_component,setMountedComponent] = useState()
  const setMountedComponentHandler = (key) => {
    setMountedComponent(key);
  };

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };
  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        setMountedComponentHandler,
        mounted_component,
        removeFromFavorites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
