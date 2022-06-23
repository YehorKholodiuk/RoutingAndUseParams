import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Product from "./Product";
function App() {
  return (
    <div className="App">
  <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/product/123">Product 123</Link> </li>
      <li><Link to="/product/234">product 234</Link></li>



  </ul>

      App

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
          <Route path="product/:productID" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
