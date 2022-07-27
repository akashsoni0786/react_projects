import React, { useState } from "react";
export const ContxtName = React.createContext();

export const ContextFuName = (props) => {

  const [cartvalues,setCartvalues]=useState([]);
  const [additem,setAdditem]=useState(0);
  const [emptycartar,setEmptycartar]=useState([]);

  return (
    <ContxtName.Provider value={[cartvalues,setCartvalues]}>
        {props.children}
    </ContxtName.Provider>
  )
}
