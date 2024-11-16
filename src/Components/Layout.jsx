import React from 'react'
import { Outlet } from 'react-router-dom'
import Landing from './Landing'
import About from './About'

function Layout() {
  return (
    <div>
        <Landing/>
        {/* <About /> */}
        <Outlet/>
    </div>
  )
}

export default Layout