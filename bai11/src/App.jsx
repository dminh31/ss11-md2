import React from 'react'
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import { Routes,Route } from 'react-router-dom';
import Products from './components/Products/Products.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/products' element={<Products></Products>}>
          <Route path=':productID' element={<ProductDetail></ProductDetail>}></Route>
        </Route>
        
      </Routes>
    </>
  )
}
