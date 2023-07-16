import React from 'react'
import styles from './Sodebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />

      <p>list of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar
