import React from "react";
import {v4 as uid} from 'uuid';
import apicall from './db.js';
export const contextname = React.createContext();
const Context = (props) => {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [like, setLikes] = React.useState([]);
  const [login, setLogin] = React.useState("");
  const [loginid, setLoginid] = React.useState("");

  React.useEffect(()=>{
    const ax = async ()=>{
      try{
        let allusers = await apicall.get("/users");
        let allposts = await apicall.get("/posts");
        let alllikes = await apicall.get("/likes");
        let allcomments = await apicall.get("/comments");
        console.log(allusers.data)
        console.log(allposts.data)
        setUsers(allusers.data);
        setPosts(allposts.data);
        setLikes(alllikes.data);
        setComments(allcomments.data);
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
        setPosts:setPosts,
        loginid:loginid, 
        setLoginid:setLoginid,
        like:like,
        setLikes:setLikes,
        comments:comments,
        setComments:setComments
      }}
    >
      {props.children}
    </contextname.Provider>
  );
};

export default Context;
