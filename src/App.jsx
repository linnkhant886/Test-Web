import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Why from './Component/Why'
import Feature from './Component/Feature'
import Client from './Component/Client'
import Solution from './Component/Solution'
import Download from './Component/Download'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <Hero></Hero>
      <Why></Why>
      <Feature></Feature>

      <Client></Client>
      <Solution></Solution>
      <Download></Download>

      <Footer></Footer>
    </div>
  )
}

export default App
