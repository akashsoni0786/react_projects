import React, { useState } from "react";
export const contextname = React.createContext();
const MyContext = (props) => {
  const [alldata, setAllDate] = React.useState("");
  const [search, setSearch] = React.useState("Rama");
  const [isLoading, setIsLoading] = useState(false);
  const [searchicon,setSearchicon] = useState("0");
  const [darkmode,setDarkMode] = React.useState("white");
  const [bgs,setBgs] = React.useState("white");
  const [fonts,setFonts] = React.useState("black");
  const [org_fonts,setOrgFonts] = React.useState("orange");
  const [bgslib,setBgslib] = React.useState("white");


  React.useEffect(() => {
    const fetchallbookApi = async () => {
      setIsLoading(true);
      try {
        const url = `https://openlibrary.org/search.json?q=${search}&mode=ebooks&has_fulltext=true`;
        const response = await fetch(url);
        const resjson = response.json();
        resjson.then((result) => {
          setAllDate(result.docs);
          setIsLoading(false);
        });
      } catch (e) {
        console.log("Not found");
      }
    };
    // const fetchbookApi = async () => {
    //   try {
    //     const url2 = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
    //     const response2 = await fetch(url2);
    //     const resjson2 = response2.json();
    //     resjson2.then((result) => {
    //       setISBN(result);
    //     });
    //   } catch (e) {
    //     alert("Not found");
    //   }
    // };
    fetchallbookApi();
  }, [search]);
  return (
    <contextname.Provider
      value={{alldata:alldata, search:search, setSearch:setSearch, setAllDate:setAllDate, isLoading:isLoading, setIsLoading,searchicon:searchicon,setSearchicon:setSearchicon,darkmode:darkmode,setDarkMode:setDarkMode,bgs:bgs,setBgs:setBgs,fonts:fonts,setFonts:setFonts,org_fonts:org_fonts,setOrgFonts:setOrgFonts,bgslib:bgslib,setBgslib:setBgslib}}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default MyContext;
