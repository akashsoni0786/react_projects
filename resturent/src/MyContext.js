import React from 'react'

export const contextname = React.createContext();
const MyContext = (props) => {
    const [login,setLogin] = React.useState(0);
    const [usertemp,setUserTemp] = React.useState('ak');
    const [pastemp,setPastemp] = React.useState('ak');
    const [usernamefinal,setUsernamefinal] = React.useState('');
    const [passfinal,setPassfinal] = React.useState('');
  return (
    <contextname.Provider value={[login,setLogin,pastemp,setPastemp,usernamefinal,setUsernamefinal,passfinal,setPassfinal,usertemp,setUserTemp]}>
        {props.children}
    </contextname.Provider>
  )
}

export default MyContext