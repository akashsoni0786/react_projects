import * as React from "react";
import MediaControlCard from "./resCard";
import "./test.json";
var data = require("./test.json");
export default function BasicModal() {
  const [restuarentarr, setRes] = React.useState(data.restaurants);

  return (
    <div>
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
