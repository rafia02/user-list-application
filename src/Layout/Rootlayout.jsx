import React from 'react'
import Navber from '../Components/Share/Navber'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}

export default Rootlayout