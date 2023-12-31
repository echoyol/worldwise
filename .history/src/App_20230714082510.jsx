import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='product'
          element={<Product />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
