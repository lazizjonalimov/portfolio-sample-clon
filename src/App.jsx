import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Porffolio from './components/portfolio/Portfolio'
import Feedbacks from './components/feedbacks/Feedbacks'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Porffolio/>
        <Feedbacks/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default App;