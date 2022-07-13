import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Nav, Footer } from "../Components/Common/index"
import { Estore, Purchase, Favourite } from "../Pages/index"
import ProductDetails from '../Components/ProductDetails/ProductDetails'
function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/estore" element={<Estore />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
