import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <input type='text' placeholder='search a name ' onChange= {(e) => props.searchresultProp(e)} ></input>
    </div>
  )
}

export default SearchBar; 
