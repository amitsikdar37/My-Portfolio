import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/icons/simple-icons_codecrafters.svg"
import vector from "./assets/icons/Vector.svg"
import "./style/top-section.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Navbar() {
  const navbar = useRef()

  const { contextSafe } = useGSAP({ scope: navbar })

  const onEnter = contextSafe((e) => {
    const content = e.currentTarget.querySelector('.nav-btn-content')
    gsap.to(content, {
      y: -29,
      duration: 0.5,
      ease: "power2.inOut"
    })
  })

  const onLeave = contextSafe((e) => {
    const content = e.currentTarget.querySelector('.nav-btn-content')
    gsap.to(content, {
      y: 0,
      duration: 0.5,
      ease: "power2.inOut"
    })
  })

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top-section">
      <div className="left-side">
        <img src={logo} alt="logo" />
        <p>Amit.</p>
      </div>
      <div className="navbar" ref={navbar}>
        <div className="nav-item">
          <button 
          onClick={() => scrollToSection('about')}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}>
            <span className="nav-btn-content">
              <span>About Me</span>
              <span>About Me</span>
            </span>
          </button>
        </div>
        <div className="nav-item">
          <Link to="/projects">
            <button 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}>
              <span className="nav-btn-content">
                <span>Projects</span>
                <span>Projects</span>
              </span>
            </button>
          </Link>
        </div>
        <div className= "nav-item">
          <Link to="/ai-bot">
            <button 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}>
              <span className="nav-btn-content">
                <span>AI Bot</span>
                <span>AI Bot</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="nav-item">
          <button 
          onClick={() => scrollToSection('contact')}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}>
            <span className="nav-btn-content">
              <span>Socials</span>
              <span>Socials</span>
            </span>
          </button>
        </div>
      </div>
      <div className="right-side">
        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          Contact
          <img src={vector} alt="arrow" className="contact-icon" />
        </button>
      </div>
    </div>
  )
}
