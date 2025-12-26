import React from 'react'
import Navbar from '../components/Navabr'
import Header from '../components/Header'
import Footer from '../components/Foot'

const Main = ({children}) => {
  return (
    <div>
      <div>
        <Header/>
        <Navbar/>
      </div>
      {children}
      <Footer/>
      {/* <Footer/> */}
    </div>
  )
}

export default Main
