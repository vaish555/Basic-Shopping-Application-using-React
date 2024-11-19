import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import Mobiles from './components/Products/Mobiles';
import Watches from './components/Products/Watches';
import Laptops from './components/Products/Laptops';
import Fashion from './components/Products/Fashion';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  // let path=window.location.pathname;
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={<Products/>}>
           <Route path='mobiles' element={<Mobiles/>}/>
           <Route path='watches' element={<Watches/>}/>
           <Route path='laptops' element={<Laptops/>}/>
           <Route path='fashion' element={<Fashion/>}/>
           <Route index element={<Fashion/>}/>
        </Route>
        <Route path='/product-details/:pid' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
