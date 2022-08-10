import React from "react";
import {v4 as uid} from 'uuid';
import apicall from './db.js';
export const contextname = React.createContext();
const Context = (props) => {
  const [users, setUsers] = React.useState([
  ]);
  const [login, setLogin] = React.useState("");

  React.useEffect(()=>{
    const ax = async ()=>{
      try{
        let response = await apicall.get("/users")
        console.log(response.data)
        setUsers(response.data)
      }
      catch(e){
        console.log(e)
      }
    }
   ax();
    
  },[])
  console.log(users)
    
  return (
    <contextname.Provider
      value={{
        users: users,
        setUsers: setUsers,
        login: login,
        setLogin: setLogin,
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
