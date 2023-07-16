import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='product'
          element={<Product />}
        />
        <Route
          path='/'
          element={<Homepage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
