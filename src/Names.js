import React, { useState } from "react";
import BabyNames from "./BabyNames.json";
import Favourites from "./Favourites";

const Names = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [favourites, setFavourites] = useState("");

  const searchHandler = (e) => {
    const matchedNames = BabyNames.filter((el) =>
      el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setIsSearched(true);
    setSearchResults(matchedNames);
  };

  const namesToDisplay = isSearched ? searchResults : BabyNames;
  
  return (
    <>
      <input
        type="text"
        placeholder="search a name "
        onChange={ searchHandler}
      ></input>
      <Favourites favourites={favourites} />

      <div className="names-container">
        {namesToDisplay
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((data) => {
            if (data.sex === "f") {
              return (
                <button className="girls-names" onClick={setFavourites}>
                  {data.name}
                </button>
              );
            } else {
              return (
                <button className="boys-names" onClick={setFavourites}>
                  {data.name}
                </button>
              );
            }
          })}
      </div>
    </>
  );
};

export default Names;
