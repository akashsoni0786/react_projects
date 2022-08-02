import React from "react";
export const contextname = React.createContext();
const MyContext = (props) => {
  const [alldata, setAllDate] = React.useState("");
  const [isbn, setISBN] = React.useState("");
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const fetchallbookApi = async () => {
      try {
        const url = `https://openlibrary.org/search.json?q=${search}&mode=ebooks&has_fulltext=true`;
        const response = await fetch(url);
        const resjson = response.json();
        resjson.then((result) => {
          setAllDate(result);
          console.log(alldata);
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
    // fetchbookApi();
  },[search]);
  return (
    <contextname.Provider value={[alldata,search,setSearch]}>{props.children}</contextname.Provider>
  );
};

export default MyContext;
