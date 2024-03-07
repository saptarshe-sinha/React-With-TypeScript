// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FoodDetails from './modules/foodDetails/FoodDetails'
import Cart from './modules/cart/Cart'
import Dashboard from './modules/dashboard/Dashboard'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/food-details' element={<FoodDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </>
  )
}

export default App
