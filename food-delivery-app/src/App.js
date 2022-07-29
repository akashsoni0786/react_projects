import "./App.css";
import DrawerAppBar from "./Navbar";
import MediaControlCard from "./FoodCard";
import FixedBottomNavigation from "./Footer";
import { ContxtName } from "./Contxt";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import FoodContainer from "./FoodContainer";
import FoodContainer2 from "./FoodContainer2";
import FoodContainer3 from "./FoodContainer3";
import FoodContainer4 from "./FoodContainer4";
import FoodContainer5 from "./FoodContainer5";

const App = () => {
  const [
    cartvalues,
    setCartvalues,
    emptycartar,
    setEmptycartar,
    additem,
    setAdditem,
  ] = React.useContext(ContxtName);

  const products = [
    {
      id: "001",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "002",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "003",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "004",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "005",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "006",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "007",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "008",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "009",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "010",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "011",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
    {
      id: "012",
      name: "Pizza",
      price: "20",
      category: "veg",
    },
  ];
  const addfood = (e) => {
    let cartarray;
    products.map((i) => {
      if (i.id === e.target.id) {
        var k = {
          id: i.id,
          name: i.name,
          price: i.price,
          quan: 1,
        };
        var d = -1;
        cartvalues.forEach((a) => {
          d = d + 1;
          if (a.id == k.id) {
            k = {
              id: i.id,
              name: i.name,
              price: i.price,
              quan: Number(a.quan) + 1,
            };
            cartvalues.splice(d, 1);
          }
        });

        cartarray = [...cartvalues, k];
        setCartvalues(cartarray);
        console.log(cartarray);
      }
    });
  };
  const emptycartarea = (v) => {
    setCartvalues([]);
  };

  const deleteme = (e) => {
    var pid = e.target.id;
    let l = -1;
    let cart = cartvalues;
    cart.map((i) => {
      l = l + 1;
      if (i.id == pid) {
        cart = cart.filter((exp) => exp.id != i.id);
        setCartvalues(cart);
      }
    });
  };
  const orderdone = () => {
    if (cartvalues.length != 0) {
      alert("You will get your order after 20 minutes");
      setCartvalues([]);
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="">
      <DrawerAppBar />



      <Routes>
        <Route path='/' element={<FoodContainer products={products} addfood={addfood} />} />

        <Route path='/lunch' element={<FoodContainer2 products={products} addfood={addfood} />} />

        <Route path='/snacks' element={<FoodContainer3 products={products} addfood={addfood} />} />

        <Route path='/dinner' element={<FoodContainer4 products={products} addfood={addfood} />} />

        <Route path='/burgers' element={<FoodContainer5 products={products} addfood={addfood} />} />
      </Routes>

      



      <div className="downcart">
        <FixedBottomNavigation
          placedorder={orderdone}
          cartarray={cartvalues}
          emptyit={emptycartarea}
          deleteFood={deleteme}
        />
      </div>
    </div>
  );
};

export default App;
