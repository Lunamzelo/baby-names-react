import React from 'react'



const Favourites = (props) => {
//    const [clicked, setClicked] = useState(false);

//   const clickHandler = (e) => {
//     setClicked(true);

//     const clickedName = BabyNames.filter(
//       (el) => el.name === e.target.innerHTML
//     ).map((data) => <li>{data}</li>);
//     //console.log(e.target.innerHTML);
//   };

console.log(props)
    
  return (
    <div>
      <h3> Add your favourites </h3>
      {/* <div className="favourites">
        {favNames
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
                <button className="boys-names" onClick={() => {}}>
                  {data.name}
                </button>
              );
            }
          })}
      </div> */}

      <ul>
        <li>hello</li>
      </ul>
    </div>
  );
}

export default Favourites;