import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import Navbars from './Navbar/test'

function Layout() {
  return (
    <>
      <Navbar/>
      {/* <Navbars/> */}
      <Outlet/>
    </>
  )
}

export default Layout