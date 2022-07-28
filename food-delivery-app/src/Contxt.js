import React, { useState } from "react";
export const ContxtName = React.createContext();

export const Contxt = (props) => {
  const [cartvalues, setCartvalues] = useState([]);
  const [additem, setAdditem] = useState(0);
  const [emptycartar, setEmptycartar] = useState([]);

  return (
    <ContxtName.Provider value={[cartvalues, setCartvalues,emptycartar, setEmptycartar,additem, setAdditem] }>{props.children}</ContxtName.Provider>
  );
};
