import { Route, Routes } from 'react-router-dom';
import EneryReaturants from './EneryReaturants';
import Home from './Home';
import ResponsiveAppBar from './Nacbar';
import Reaturants from './Reaturants';


function App() {

  return (
    <div className="App">
      <ResponsiveAppBar  /> 
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/restuarents' element={<Reaturants />} />
        <Route path='/details' element={<EneryReaturants />} />
      </Routes>
      
        
    </div>
  );
}

export default App;
