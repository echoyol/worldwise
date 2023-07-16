import React from 'react'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!Array.isArray(cities)) {
    return <p>No cities found.</p>
    {
      console.log(cities)
    }
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
        />
      ))}
    </ul>
  )
}

export default CityList
