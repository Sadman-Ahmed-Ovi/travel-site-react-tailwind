import React, { useState } from 'react';
import Carousel from "./components/Carousel"
import Destination from "./components/Destination"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Selects from "./components/Selects"



function App() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  return (
    <div className="App">
     
      <Navbar nav={nav} setNav={setNav} logo={logo} setLogo={setLogo}/>
      <Hero nav={nav} setNav={setNav}/>
      <Destination/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default App
