import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Timeline from './components/Timeline'
import Experience from './components/Experience'
import Personality from './components/Personality'
import Bookmarks from './components/Bookmarks'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Timeline />
        <Experience />
        <Personality />
        <Bookmarks />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
