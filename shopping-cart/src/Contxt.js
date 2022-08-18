import React from "react";
export const contxtname = React.createContext();
const Contxt = (props) => {
  const [login,setLogin] = React.useState('');
  const [bgs,setBgs] = React.useState('white');
  const [bgsboxs,setBgsBox] = React.useState('white');
  const [txts,setTxts] = React.useState('black');
  const [search, setSearch] = React.useState([
    {
      id: "001",
      name: "Peach Festive Ethnic Kurta",
      cprice: 500,
      price: 200,
      pic: "https://admintcns.wforwoman.com/product/22FEA13190-504281/665/22FEA13190-504281_1.JPG",
    },
    {
      id: "002",
      name: "Green A-Line Dress",
      cprice: 500,
      price: 300,
      pic: "https://wforwoman.gumlet.io/product/22FEA12869-701905/300/22FEA12869-701905.JPG",
    },
    {
      id: "003",
      name: "Black Yarn-Dyed Kurta",
      cprice: 1000,
      price: 500,
      pic: "https://wforwoman.gumlet.io/product/22CRA12230-702080/300/21FEA12230-702080_1.JPG",
    },
    {
      id: "004",
      name: "Blue Yarn-Dyed Kurta",
      cprice: 500,
      price: 200,
      pic: "https://admintcns.wforwoman.com/product/22CRA12230-702081/665/21FEA12230-702081_1.JPG",
    },
  ]);
  return (
    <contxtname.Provider value={
      { search: search, 
      setSearch: setSearch,
      login:login,
      setLogin:setLogin,
      bgs:bgs,
      setBgs:setBgs,
      bgsboxs:bgsboxs,
      setBgsBox:setBgsBox,
      txts:txts,
      setTxts:setTxts }
      }>
      {props.children}
    </contxtname.Provider>
  );
};

export default Contxt;
