import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/icons/simple-icons_codecrafters.svg"
import vector from "./assets/icons/Vector.svg"
import "./style/top-section.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const top_section = useRef()

  const { contextSafe } = useGSAP({ scope: top_section })

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

  const onContactEnter = contextSafe((e) => {
    const filler = e.currentTarget.querySelector('.btn-filler')
    const textContent = e.currentTarget.querySelector('.btn-text-content')
    const iconCircle = e.currentTarget.querySelector('.btn-icon-circle')
    const icon = e.currentTarget.querySelector('.contact-icon')

    gsap.to(filler, {
      width: '100%',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(textContent, {
      y: -16,
      color: '#fff',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(iconCircle, {
      backgroundColor: '#fff',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(icon, {
      filter: 'invert(0)',
      duration: 0.4,
      ease: "power2.inOut"
    })
  })

  const onContactLeave = contextSafe((e) => {
    const filler = e.currentTarget.querySelector('.btn-filler')
    const textContent = e.currentTarget.querySelector('.btn-text-content')
    const iconCircle = e.currentTarget.querySelector('.btn-icon-circle')
    const icon = e.currentTarget.querySelector('.contact-icon')

    gsap.to(filler, {
      width: '0%',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(textContent, {
      y: 0,
      color: '#000',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(iconCircle, {
      backgroundColor: '#000',
      duration: 0.4,
      ease: "power2.inOut"
    })
    gsap.to(icon, {
      filter: 'invert(1)',
      duration: 0.4,
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
    <div className="top-section" ref={top_section}>
      <div className="left-side">
        <img src={logo} alt="logo" />
        <p>Amit.</p>
      </div>
      <div className="navbar">
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
        <button 
          className="contact-btn" 
          onClick={() => scrollToSection('contact')}
          onMouseEnter={onContactEnter}
          onMouseLeave={onContactLeave}
        >
          <div className="btn-filler"></div>
          <div className="btn-text-window">
            <div className="btn-text-content">
              <span>Contact</span>
              <span>Hire me</span>
            </div>
          </div>
          <div className="btn-icon-circle">
            <img src={vector} alt="arrow" className="contact-icon" />
          </div>
        </button>
      </div>
    </div>
  )
}
