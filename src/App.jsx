import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddItems from './AddItems'
import ItemList from './ItemList'
import Header from './Header'
import Enquiry from './Enquiry'
import Login from './Login'
import Success from './Success'

// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/itemlist"  element={<ItemList/>}/>
        <Route path='/additems' element={<AddItems/>} />
        <Route path='/enquiry' element={<Enquiry/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
