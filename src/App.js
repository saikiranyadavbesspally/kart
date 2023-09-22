import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import File from './File.js'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Productdetail from './components/Productdetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App"> 

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/product' element = {<Product/>}/>
        <Route path = '/product/:id' element = {<Productdetail/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/checkout' element = {<Checkout/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
