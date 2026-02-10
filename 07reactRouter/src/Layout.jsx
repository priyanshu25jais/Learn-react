import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* all component is fix  but in outlet -automaticall react-router-dom ki taraf se nesting ki ja sakti h*/}
    <Footer/>
    </>
  )
}

export default Layout