import React from 'react'
import { contextname } from './Context';
import MyPostbox from './MyPostBox';
import Postbox from './Postbox';

const MyPost = () => {
  const contxt = React.useContext(contextname);
    return (
      contxt.login && 
        <div className="homepage">
          {contxt.posts.map((i) => {
            console.log(contxt.login);
            if(i.author === contxt.login){
                return <MyPostbox ids={i.id} username={i.author} text={i.content} pic={i.contentimg} />
            }
          }
          )}
        </div>
      );
}

export default MyPost