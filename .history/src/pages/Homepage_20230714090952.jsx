import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage</h1>
      <Link to='/pricing'>Pricing1</Link>
    </div>
  )
}

export default Homepage
