import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

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
          path='pricing'
          element={<Pricing />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='app'
          element={<AppLayout />}
        >
          <Route
            path='cities'
            element={<p>list of cities</p>}
          />
          <Route
            path='countries'
            element={<p>Countries</p>}
          />
          <Route
            path='form'
            element={<p>Form</p>}
          />
        </Route>
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
