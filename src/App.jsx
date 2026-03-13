import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FeaturedProject from './Components/FeaturedProject'


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <FeaturedProject />
      <Projects/>
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
