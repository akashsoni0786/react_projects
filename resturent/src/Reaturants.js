import * as React from "react";
import "./Login.css";
import MediaControlCard from "./resCard";
import "./test.json";
var data = require("./test.json");
export default function BasicModal() {
  const [restuarentarr, setRes] = React.useState(data.restaurants);
  const searchrestaurent = (e) => {
    var searchedarray = [];
    var searchval = e.target.value;
    if (searchval === "") {
      setRes(data.restaurants);
    } else {
      restuarentarr.forEach((i) => {
        if (i.name.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setRes(searchedarray);
        } else if (i.cuisine_type.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setRes(searchedarray);
        } else if (i.neighborhood.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          setRes(searchedarray);
        }
      });
    }
  };
  return (
    <div className="allrestro">
      <input
        onKeyUp={searchrestaurent}
        className="searchbar"
        placeholder="Find here..."
      />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {restuarentarr.map((i, index) => (
          <MediaControlCard
            nameofrestuarent={i.name}
            cuisine={i.cuisine_type}
            resimg={i.photograph}
            locations={i.address}
            idofresturents={i}
          />
        ))}
      </div>
    </div>
  );
}
