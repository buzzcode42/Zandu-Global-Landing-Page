import React from 'react'
import { NavBar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Values } from './components/Values'
import { Team } from './components/Team'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <NavBar />
      <Hero />
      <Manifesto/>
      <Values/>
      <Team/>
      <Faq/>
      <Footer/>
    </section>

  );
}

export default App;
