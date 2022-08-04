import './App.css';
import React from "react"
function App() {
  const [password,setPassword] = React.useState('---------');
  const atoz = ["a",'b','c','d','e','f','g','h','i','j','k'];
  const rest1 = ['l','m','n','o','p','q','r','s','t','u','v'];
  const rest2 = ['w','x','y','z','@','#','%','*','&','!',"|"];
  const generate = ()=>{
   var pass = [];
    for(let i =0;i<3;i++){
      var pos = (Math.random()*10).toFixed(0).toString();
      var pos2 = (Math.random()*10).toFixed(0).toString();
      var l = (Math.random()*10).toFixed(0).toString();
      pass.push(rest1[pos]+l+atoz[pos]+rest2[pos2]);
    }
    setPassword(pass);
  }
 
  const copythis = ()=>{
    if(password == '---------'){
      alert("First you have to click on generate button");
    }
    else{
      alert("Your password has been copied!")

    }
  }
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={generate}>Generate</button>
        <button onClick={copythis}>Copy</button>
        <h2>Password is : {password}</h2>

        
      </header>
    </div>
  );
}

export default App;
