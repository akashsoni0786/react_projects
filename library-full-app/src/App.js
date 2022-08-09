import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Book from "./Book";
import Home from "./Home";
import Library from "./Library";
import Navbar from "./Nav";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
