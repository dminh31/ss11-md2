import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import List from './components/List';
import Update from './components/Update';
import AddStudent from './components/AddStudent';
export default function App() {
  return (
    <div className='app'>
      <h1>ReactJS CRUD WITH API</h1>
      <Routes>
        {/* <Route path='/' element={<List ></List>}></Route> */}
        <Route path='/add' element={<AddStudent ></AddStudent>}></Route>
        <Route path='/update' element={<Update ></Update>}></Route>
      </Routes>
    </div>
  )
}
