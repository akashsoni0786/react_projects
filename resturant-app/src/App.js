import "./App.css";
import "./test.json";
import React, { Component } from "react";
import NavBar from "./NavBar";
import Restaurant from "./Restaurant";
import SearchBar from "./SearchBar";
import EveryRestaurant from "./EveryRestaurant";
import OperatingHour from "./OperatingHour";
import Reviews from "./Reviews";
import Login from "./Login";
import Signup from "./Signup";

var data = require("./test.json");
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: data.restaurants,
      restaurants: data.restaurants,
      searchval: "",
      home: 0,
      selectedpageid: "",
      login: 1,
      signupornot: 0,
      emS: "",
      psS: "",
      cps: "",
      emL: "",
      psL: "",
      user: { u: "", p: "" },
    };
  }
  fetchLocationName = async (lat, lng) => {
    await fetch(
      "https://www.mapquestapi.com/geocoding/v1/reverse?key=G1moSFJkXvMTf7kCVqTOPMh1SxtvJaGi&location=" +
        lat +
        "%2C" +
        lng +
        "&outFormat=json&thumbMaps=false"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(JSON.stringify(responseJson));
      });
    // altitude={this.fetchLocationName(i.latlng.lat,i.latlng.lng)}
  };
  inputSemail = (e) => {
    this.setState({
      emS: e.target.value,
    });
  };
  inputSpass = (e) => {
    this.setState({
      psS: e.target.value,
    });
  };
  inputSconpass = (e) => {
    this.setState({
      cps: e.target.value,
    });
  };
  signbtn = () => {
    if (this.state.emS === "") {
      alert("All fields are mendatory");
    } else if (this.state.psS === "") {
      alert("All fields are mendatory");
    } else if (this.state.cps === this.state.psS) {
      var eml= this.state.emS;
      var psw = this.state.psS;
      this.setState({
        user : {}
      })
      console.log(this.state.user)
    } else if (this.state.cps !== this.state.psS) {
      alert("Passwords are not same!!");
    }
  };
  valus = () => {
    console.log(data.restaurants);
  };
  searchrestaurent = (e) => {
    var searchedarray = [];
    var searchval = e.target.value;
    if (searchval === "") {
      this.setState({
        restaurant: this.state.restaurants,
      });
    } else {
      this.state.restaurant.forEach((i) => {
        if (i.name.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          this.setState({
            restaurant: searchedarray,
          });
        } else if (i.cuisine_type.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          this.setState({
            restaurant: searchedarray,
          });
        } else if (i.neighborhood.toLowerCase().includes(searchval)) {
          searchedarray = [...searchedarray, i];
          this.setState({
            restaurant: searchedarray,
          });
        }
      });
    }
  };
  sendittopage = (e) => {
    var id = e;
    this.setState({
      home: 1,
      selectedpageid: id,
    });
  };
  loginswap = () => {
    this.setState({ signupornot: 1 });
  };
  signupswap = () => {
    this.setState({ signupornot: 0 });
  };
  renderElement = () => {
    if (this.state.login === 1) {
      if (this.state.home === 0) {
        return (
          <span>
       
            <SearchBar findit={this.searchrestaurent} />
            {this.state.restaurant.map((i) => (
              <Restaurant
                id={i.id}
                resName={i.name}
                address={i.address}
                cuisine_type={i.cuisine_type}
                photograph={i.photograph}
                neighborhood={i.neighborhood}
                sendittopage={() => {
                  this.sendittopage(i.id);
                }}
              />
            ))}
          </span>
        );
      } else if (this.state.home === 1) {
        return this.state.restaurant.map((i) => {
          if (this.state.selectedpageid === i.id) {
            return (
              <>
          
                <EveryRestaurant
                  id={i.id}
                  img={i.photograph}
                  name={i.name}
                  address={i.address}
                  cuisine_type={i.cuisine_type}
                  neighborhood={i.neighborhood}
                  operating_hours={Object.keys(i.operating_hours).map(
                    (item) => {
                      return (
                        <OperatingHour
                          day={item}
                          times={i.operating_hours[item]}
                        />
                      );
                    }
                  )}
                  reviews={Object.keys(i.reviews).map((item) => {
                    return (
                      <Reviews
                        uname={i.reviews[item].name}
                        rating={i.reviews[item].rating}
                        date={i.reviews[item].date}
                        comments={i.reviews[item].comments}
                      />
                    );
                  })}
                />
              </>
            );
          }
        });
      }
    } else {
      if (this.state.signupornot === 0) {
        return (
          <Signup
            gotologinpage={this.loginswap}
            email={this.inputSemail}
            password={this.inputSpass}
            confpass={this.inputSconpass}
            signupbtn={this.signbtn}
          />
        );
      } else if (this.state.signupornot === 1) {
        return <Login gotosignuppage={this.signupswap} />;
      }
    }
  };
  render() {
    return (
      <>
        {/* <button onClick={this.valus}>Click</button> */}
        {this.renderElement()}
      </>
    );
  }
}
