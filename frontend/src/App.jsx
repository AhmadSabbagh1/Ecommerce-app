import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Content'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] m:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>

      </Routes>

    </div>
  )
}

export default App