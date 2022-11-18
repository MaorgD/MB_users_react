import React from 'react'
import { Outlet } from "react-router-dom"
import FooterAdmin from './footer/footer'
import HeaderAdmin from './header/header'

const LayoutAdmin = () => {
  return (
    <div>
       <HeaderAdmin/>
       <Outlet/>
       <FooterAdmin/>
    </div>
  )
}

export default LayoutAdmin