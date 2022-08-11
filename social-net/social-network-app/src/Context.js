import React from "react";
import {v4 as uid} from 'uuid';
import apicall from './db.js';
export const contextname = React.createContext();
const Context = (props) => {
  const [users, setUsers] = React.useState([
  ]);
  const [posts, setPosts] = React.useState([
  ]);
  const [login, setLogin] = React.useState("");

  React.useEffect(()=>{
    const ax = async ()=>{
      try{
        let allusers = await apicall.get("/users");
        let allposts = await apicall.get("/posts")
        console.log(allusers.data)
        console.log(allposts.data)
        setUsers(allusers.data);
        setPosts(allposts.data);
      }
      catch(e){
        console.log(e)
      }
    }
   ax();
    
  },[])
  
    
  return (
    <contextname.Provider
      value={{
        users: users,
        setUsers: setUsers,
        login: login,
        setLogin: setLogin,
        posts:posts, 
        setPosts:setPosts
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
