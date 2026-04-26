import React from 'react'
import Navbar from '../components/Navabr'
import Header from '../components/Header'
import Footer from '../components/Foot'
import Breadcrumb from '../components/Breadcrumb'

const Main = ({children}) => {
  return (
    <div>
      <div>
        <Header/>
        <Navbar/>
        <Breadcrumb/>
      </div>
      {children}
      <Footer/>
      {/* <Footer/> */}
    </div>
  )
}

export default Main
