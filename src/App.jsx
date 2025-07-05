import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddItems from './AddItems'
import Orders from './Orders'
import ItemList from './ItemList'
import Header from './Header'
import Nav from './Nav'
import Enquiry from './Enquiry'

// import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"  element={<ItemList/>}/>
        <Route path='/additems' element={<AddItems/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/enquiry' element={<Enquiry/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
