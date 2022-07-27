import logo from './logo.svg';
import './App.css';

const App=() =>{
const hovering = (e)=>{
  console.log(e.target.value)
}
  return (
    <div onMouseEnter={hovering} className="App">
      <header className="App-header">
        <h1 >Akash</h1>
      </header>
    </div>
  );
}

export default App;
