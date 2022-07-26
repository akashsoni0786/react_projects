import React, { useState } from "react";
export const ContextName = React.createContext();

export const ContextFuncName = (props) => {

  const [login,setLogin] = useState(0);
  const [username,setUsername]=useState("Login");
  const [cartvalues,setCartvalues]=useState([]);
  const [additem,setAdditem]=useState(0);
  const [emptycartar,setEmptycartar]=useState([]);

  return (
    <ContextName.Provider value={[login,setLogin,username,setUsername,cartvalues,setCartvalues,additem,setAdditem,emptycartar,setEmptycartar]}>
        {props.children}
    </ContextName.Provider>
  )
}
