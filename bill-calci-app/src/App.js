import logo from './logo.svg';
import './App.css';
import Bill from './Bill';
import Back from './Back';

function App() {
  return (
    <div className="App">
      <Back>
        <Bill />
      </Back>
    </div>
  );
}

export default App;
