import { Route, Routes } from "react-router-dom";
import EneryReaturants from "./EneryReaturants";
import Home from "./Home";
import Login from "./Login";
import ResponsiveAppBar from "./Nacbar";
import Reaturants from "./Reaturants";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restuarents" element={<Reaturants />} />
        <Route path="/details" element={<EneryReaturants />} />
      </Routes>
    </div>
  );
}

export default App;
