import React from "react";
import { contextname } from "./MyContext";

const Library = () => {
    const [inputbook,setInputBook] = React.useState('');
  const [alldata, search, setSearch] = React.useContext(contextname);

  console.log(alldata);
    const enteredbook=(e)=>{
        setSearch(e.target.value);
        // console.log(alldata.docs);
    }
  return (
    <div>
      <input onChange={enteredbook} className="searchbar" placeholder="Enter books name" />
    </div>
  );
};

export default Library;
