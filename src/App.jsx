import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LandingPage } from './LandingPage/lp'
import { AboutMe } from './About Me/abm'
import { Timeline } from './Timeline/tl'
import { TechStack } from './Tech Stack/ts'
import { ContactPage } from './Contact Page/cp'
import { ProjectsPage } from './Projects Page/ProjectsPage'
import { AIBotPage } from './AIBot/AIBotPage'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function Home() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tech-stack",
        start: "300px top",
        end: "1100px top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      }
    })

    tl.from("#contact", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out"
    })
  })

  return (
    <>
      <div id="home"><LandingPage /></div>
      <div id="about"><AboutMe /></div>
      <div id="timeline"><Timeline /></div>
      <div id="tech-stack"><TechStack /></div>
      <div id="contact"><ContactPage /></div>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ai-bot" element={<AIBotPage />} />
      </Routes>
    </Router>
  )
}

export default App

