import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import Library from "./Library";
import { contextname } from "./MyContext";
import Navbar from "./Nav";

const App = () => {
  const contxt = React.useContext(contextname);
  console.log(contxt.bgs);
  return (
    <div>
      <Navbar navbg={contxt.bgs}/>
      <Routes>
      <Route path="/" element={<Home fonts={contxt.fonts} bg={contxt.bgs} />} />
        <Route path="/library" element={<Library bglib={contxt.bgslib} fnt={contxt.fonts} cbg={contxt.bgs}/>} />
        <Route path="/book" element={<Book fonts={contxt.fonts} bg={contxt.bgs}  />} />
      </Routes>
    </div>
  );
};

export default App;
