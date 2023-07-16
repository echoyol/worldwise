import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'

const URL = 'http://localhost:9000'
function App() {
  const [cities, setCities] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function fetchCities() {
      const res = await fetch('')
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
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
            index
            element={<CityList />}
          />
          <Route
            path='cities'
            element={<CityList />}
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
