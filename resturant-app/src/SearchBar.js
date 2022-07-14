import React from 'react'

const SearchBar = (props) => {
    return (
      <div className='searchbarparent'><input onKeyUp={props.findit} className="searchbar" placeholder='Find here...' /></div>
    )
  }

export default SearchBar