import React from 'react'

export const contextname = React.createContext();
const MyContext = (props) => {
    const [login,setLogin] = React.useState(0);
    const [usertemp,setUserTemp] = React.useState('ak');
    const [pastemp,setPastemp] = React.useState('ak');
    const [usernamefinal,setUsernamefinal] = React.useState('');
    const [passfinal,setPassfinal] = React.useState('');
  return (
    <contextname.Provider value={{login:login,setLogin:setLogin,pastemp:pastemp,setPastemp:setPastemp,usernamefinal:usernamefinal,setUsernamefinal:setUsernamefinal,passfinal:passfinal,setPassfinal:setPassfinal,usertemp:usertemp,setUserTemp:setUserTemp}}>
        {props.children}
    </contextname.Provider>
  )
}

export default MyContext