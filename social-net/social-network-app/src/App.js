import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { contextname } from './Context';
import Home from './Home';
import SignIn from './Login';
import PrimarySearchAppBar from './Navbar';
import Signup from './Signup';

function App() {
  const contxt = React.useContext(contextname);

  return (
    <div className="App">
     {contxt.login !== '' && <PrimarySearchAppBar />}
     <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>

     </Routes>
    </div>
  );
}

export default App;
