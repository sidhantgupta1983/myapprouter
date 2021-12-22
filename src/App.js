import React from 'react';
import AboutUs from './Component/AboutUs';
import Contact from './Component/ContactUs';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import PageNotFound from './Component/PageNotFound';
import Product from './Component/Product';
import MobileList from './Component/MobileList';
import LaptopList from './Component/LaptopList';
import ProductDesc from './Component/ProductDesc'
import ClassCounterOne from './Component/ClassCounterOne';
import HooksCounterOne from './HooksCounterOne';


function App() {

  return (
    // <Router>
      
    //     <Routes>
    //       <Route path='/' element={ <Home /> } />
    //       <Route path='/products' element={<Product />}> 
    //         <Route path='mobile' element={<MobileList />}>
    //           <Route path=':mobileItem' element={<ProductDesc />} /> 
    //         </Route>
    //         <Route path='laptop' element={<LaptopList />}/>
    //       </Route>
          

    //     </Routes>


    //  </Router>
    <HooksCounterOne/>
  )
}

export default App;