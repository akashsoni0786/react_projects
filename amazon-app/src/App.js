import './App.css';
import HomePage from './HomePage';
import Signin from './Signin';
import UpperNav from './UpperNav';
import UpperNavTwo from './UpperNavTwo';

function App() {
  return (
   <div className='amazon'>

   <UpperNav />
   {/* <UpperNavTwo /> */}
   <HomePage />

   </div>
  );
}

export default App;
