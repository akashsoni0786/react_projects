import "./App.css";
import React from "react";

const App = () => {
  let colors = [
    "#ffebee",
    "#ffcdd2",
    "#ef9a9a",
    "#e57373",
    "#ef5350",
    "#f44336",
    "#e53935",
    "#d32f2f",
    "#c62828",
    "#b71c1c",
    "#fce4ec",
    "#f8bbd0",
    "#f48fb1",
    "#f06292",
    "#ec407a",
    "#e91e63",
    "#d81b60",
    "#c2185b",
    "#ad1457",
    "#880e4f",
    "#f3e5f5",
    "#e1bee7",
    "#ce93d8",
    "#ba68c8",
    "#ab47bc",
    "#9c27b0",
    "#8e24aa",
    "#7b1fa2",
    "#6a1b9a",
    "#4a148c",
    "#ede7f6",
    "#d1c4e9",
    "#b39ddb",
    "#9575cd",
    "#7e57c2",
    "#673ab7",
    "#5e35b1",
    "#512da8",
    "#4527a0",
    "#311b92"
  ];
  const [r, setRed] = React.useState(0);
  const [g, setGreen] = React.useState(0);
  const [b, setBlue] = React.useState(0);
  const [clr, setClr] = React.useState("#000000");
  const [hex, setHex] = React.useState("");
  const converttohex = () => {
    if (r > 255 || g > 255 || b > 255) {
      alert("Length of number should be less than 256");
    } else if (r < 0 || g < 0 || b < 0) {
      alert("Length of number should be greater than -1");
    } else {
      let num1 = Number(r).toString(16);
      let num2 = Number(g).toString(16);
      let num3 = Number(b).toString(16);
      if (num1.length < 2) {
        num1 = "0" + num1;
      }
      if (num2.length < 2) {
        num2 = "0" + num2;
      }
      if (num3.length < 2) {
        num3 = "0" + num3;
      }
      setClr("#" + num1 + "" + num2 + "" + num3);
    }
  };

  const converttorgb = () => {
    let h = hex.split("");
    if (h.length == 7) {
      if (h[0] === "#") {
        
        var v = /^#[0-9a-f]{2}[0-9a-f]{2}[0-9a-f]{2}$/i.test(hex);
        
        if (v) {
          let red = h[1] + h[2];
          let green = h[3] + h[4];
          let blue = h[5] + h[6];
          setRed(parseInt(red, 16));
          setGreen(parseInt(green, 16));
          setBlue(parseInt(blue, 16));
        } else {
          alert("Include # here");
        }
      } else {
        alert("Invalid hex code");
      }
    } else {
      alert("Invalid hex code");
    }
  };
  const colorpicker =(e)=>{
    setClr(e.target.id)

  }
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: clr }}>
        <h1>RGB to HEX</h1>
        <div className="inputss">
          <input
            placeholder="R"
            maxLength="3"
            onChange={(e) => {
              setRed(e.target.value);
            }}
          />

          <input
            placeholder="G"
            maxLength="3"
            onChange={(e) => {
              setGreen(e.target.value);
            }}
          />

          <input
            placeholder="B"
            maxLength="3"
            onChange={(e) => {
              setBlue(e.target.value);
            }}
          />
        </div>
        <button className="convertbtn" onClick={converttohex}>
          CONVERT
        </button>
        <input placeholder="Like it"  style={{width:'5vw'}} type='color' onChange={(e)=>{setClr(e.target.value)}}/>
        <h1>{clr}</h1>
      </header>
      <h1>Color Picker</h1>
     
        <div className="colordivss">
          {colors.map((i) => 
            <div className="colorbox" onClick={colorpicker} id={i} style={{ cursor:"pointer",backgroundColor: i}}></div>
          )}
        </div>
      <h1>HEX to RGB</h1>
      <div>
        <input
          className="hexinput"
          maxLength="7"
          onChange={(e) => {
            setHex(e.target.value);
          }}
        />
        <button className="convertbtn" onClick={converttorgb}>
          CONVERT
        </button>
        <div className="rgbs">
          <div className="color">
            <h1>R</h1>
            <h1>{r}</h1>
          </div>

          <div className="color">
            <h1>G</h1>
            <h1>{g}</h1>
          </div>

          <div className="color">
            <h1>B</h1>
            <h1>{b}</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;
