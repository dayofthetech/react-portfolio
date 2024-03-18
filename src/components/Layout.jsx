import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from '../About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
  )
}
