import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LandingPage } from './LandingPage/lp'
import { AboutMe } from './About Me/abm'
import { Timeline } from './Timeline/tl' 
import { TechStack} from './Tech Stack/ts'
import { ContactPage } from './Contact Page/cp'
import { ProjectsPage } from './Projects Page/ProjectsPage'
import { AIBotPage } from './AIBot/AIBotPage'

function Home() {
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

