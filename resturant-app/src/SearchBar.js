import React from "react";
import NavBar from "./NavBar";

const SearchBar = (props) => {
  return (
    <div className="searchbarparent">
      <div className='Navbar'>
          <span className='resname'></span>
          <span className='resname'> Logout</span>
        </div>
        <div>
        <div className="zomatologo">
        <img
          alt=""
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        />
      </div>
      <p>Discover the best food & drinks in World</p>
      <input
        onKeyUp={props.findit}
        className="searchbar"
        placeholder="Find here..."
      />
        </div>
     
    </div>
  );
};

export default SearchBar;
