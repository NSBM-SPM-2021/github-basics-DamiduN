
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FoodOrder from './Pages/FoodOrder';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    <switch>
      <Route path ="/"exact component={Home} />
      <Route path ="/menu"exact component={Menu} />
      <Route path ="/about"exact component={About} />
      <Route path ="/contact"exact component={Contact} />
      <Route path ="/foodorder"exact component={FoodOrder} />


      <Route path="FoodOrder/:price">



        <FoodOrder/>

      </Route>


      
      
    </switch>
    <Footer />
     </Router>
    </div>
  );
}

export default App;