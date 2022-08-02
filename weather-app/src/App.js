import "./App.css";
import React from "react";
import Sunny from "./Sunny";
import Cloudy from "./Cloudy";
import Snowy from "./Snowy";
import Stromy from "./Stromy";
import Supermoon from "./Supermoon";

function App() {
  const [weather, setWeather] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [city, setCity] = React.useState("");
  const [temp, setTemp] = React.useState("");
  const [wind, setWind] = React.useState("");
  const [date, setDate] = React.useState("");
  const [humidity, setHumidity] = React.useState("");
  const [status, setStatus] = React.useState(0);
  const [backlayer, setBacklayer] = React.useState(
    "url('" +
      "https://images.unsplash.com/photo-1622671879425-51a41bb977ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" +
      "')"
  );

  React.useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=${search}`;
      const response = await fetch(url);
      const resjson = response.json();
      resjson.then((result) => {
        setWeather(result);
      });
    };
    fetchApi();
  });

  const show = () => {
    if (search == "") {
      alert("Field is empty");
    } else {
      console.log(weather);
      let humiditys = weather.current.humidity;
      let temp = weather.current.temp_c;
      let wind = weather.current.wind_kph;
      let cityname = weather.location.name;
      setDate(weather.current.last_updated);

      setHumidity(humiditys);
      setCity(cityname);
      setTemp(temp);
      setWind(wind);
      if (temp < 10) {
        setStatus(3);
        setBacklayer(
          "url('" +
            "https://images.unsplash.com/photo-1482489603187-f0ae98f407a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" +
            "')"
        );
      } else if (temp < 10 && wind > 10) {
        setStatus(4);
        setBacklayer(
          "url('" +
            "https://images.unsplash.com/photo-1561485132-59468cd0b553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cm9teSUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" +
            "')"
        );
      } else if (10 < temp < 25) {
        setStatus(2);
        setBacklayer(
          "url('" +
            "https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3VkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" +
            "')"
        );
      } else if (25 < temp) {
        setStatus(1);
        setBacklayer(
          "url('" +
            "https://images.unsplash.com/photo-1594220862488-117b78382514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" +
            "')"
        );
      }
      icons();
    }
  };
  const icons = () => {
    if (status == 1) {
      return <Sunny />;
    } else if (status == 2) {
      return <Cloudy />;
    } else if (status == 3) {
      return <Snowy />;
    } else if (status == 4) {
      return <Stromy />;
    } else if (status == 5) {
      return <Supermoon />;
    }
  };

  return (
    <div className="whole" style={{ backgroundImage: backlayer }}>

      <div className="alldetails">
        {icons()}
        <input
          placeholder="Enter city name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={show}>SHOW</button>
      </div>
      {status != 0 && (
        <>
          <div className="alldetails2">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/535/535188.png"
            />
            <p style={{ color: "black", fontWeight: "bold", fontSize: "3rem" }}>
              {city}
            </p>
          </div>
          <div className="alldetails">
            <div className="boxglass">Temperature : {temp}&#8451;</div>
            <div className="boxglass">Wind speed : {wind}km/h</div>
            <div className="boxglass">Humidity : {humidity}%</div>
            <div className="boxglass">Date : {date}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
