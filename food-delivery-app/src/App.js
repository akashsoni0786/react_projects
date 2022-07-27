import './App.css';
import DrawerAppBar from './Navbar';
import MediaControlCard from './FoodCard';
import FixedBottomNavigation from './Footer';
import { useContext } from 'react';
import { ContxtName } from './MyContexts';


const App=()=> {

  // const [cartvalues,setCartvalues] = useContext(ContxtName);

  const products = [
    {
      id: "001",
      name :"Pizza",
      price : "20",
      category : "veg"
    },
    {
      id: "002",
      name :"Pizza",
      price : "20",
      category : "veg"
    },
    {
      id: "003",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "004",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "005",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "006",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "007",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "008",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "009",
      name :"Pizza",
      price : "20",
      category : "veg"
    },{
      id: "010",
      name :"Pizza",
      price : "20",
      category : "veg"
    },];
  


  const addfood = (e)=>{
    
  }
  return (
    <div className="App">
      <DrawerAppBar />
      <div className='allproducts'>
      {products.map(i=><div className='carddiv'><MediaControlCard  nameoffood={i.name} price={i.price} id={i.id} addtocart={addfood}/></div>)}
      </div>
    <div className='downcart'>
    <FixedBottomNavigation />
    
    </div>
      
    </div>
  );
}

export default App;
