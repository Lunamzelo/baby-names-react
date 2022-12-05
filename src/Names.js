import React, { useState } from "react";
import BabyNames from "./BabyNames.json";
import Favourites from "./Favourites";

const Names = () => {
  const [isSearched, setIsSearched] = useState(false);

  const [searchResults, setSearchResults] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [clicked, setClicked] = useState(false);

  const searchHandler = (e) => {
    const matchedNames = BabyNames.filter((el) =>
      el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setIsSearched(true);
    setSearchResults(matchedNames);
  };
  const clickHandler = (e) => {
    console.log("I clicked it");
    const clickedName = BabyNames.filter((el) => el.name === e.target.value);
   // favourites.push(clickedName)
    setFavourites(...clickedName);
    console.log(favourites);
  };

  return isSearched ? (
    <>
      <input
        type="text"
        placeholder="search a name "
        onChange={(e) => searchHandler(e)}
      ></input>
      <Favourites />
      <div className="names-container">
        {searchResults
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((data) => {
            if (data.sex === "f") {
              return (
                <button
                  className="girls-names"
                  onClick={(e) => clickHandler(e)}
                >
                  {data.name}
                </button>
              );
            } else {
              return (
                <button className="boys-names" onClick={(e) => clickHandler(e)}>
                  {data.name}
                </button>
              );
            }
          })}
      </div>
    </>
  ) : (
    <>
      <input
        type="text"
        placeholder="search a name "
        onChange={(e) => searchHandler(e)}
      ></input>

      <div className="names-container">
        {BabyNames.sort((a, b) => (a.name > b.name ? 1 : -1)).map((data) => {
          if (data.sex === "f") {
            return (
              <button className="girls-names" onClick={(e) => clickHandler(e)}>
                {data.name}
              </button>
            );
          } else {
            return (
              <button className="boys-names" onClick={(e) => clickHandler(e)}>
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
