import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import "./style/description.css"
import ProfilePic from "./assets/img/Photo Frame.png"

export function Description() {
  const containerRef = useRef(null)

  const { contextSafe } = useGSAP({ scope: containerRef })

  const mouseEnter = contextSafe(() => {
    gsap.to('.profile-pic img', {
      scale: 1.1,
      rotate: 5,
      filter: "drop-shadow(0 10px 20px rgba(255, 255, 255, 0.3))",
      duration: 0.5,
      ease: 'power2.out'
    })
    
  })

  const mouseLeave = contextSafe(() => {
    gsap.to('.profile-pic img', {
      scale: 1,
      rotate: 0,
      filter: "drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
      duration: 0.5,
      ease: 'power2.out'
    })
  })

  return (
    <div className="abm-desc-container" ref={containerRef}>
      <div className="abm-desc">
        <p>
          I'm Amit, a developer at IIT Patna architecting the intersection of autonomous AI and high-end design. My work spans from engineering intelligent agents to building scalable full-stack ecosystems, always with a graphic designer's eye for aesthetics.
        </p>
        <p>
          Through my YouTube channel, I document the journey of mastering complex tech to inspire the next generation of builders.I’m a builder by nature, a student by choice, and a creator by heart.
        </p>
      </div>
      <div
        className="profile-pic"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={ProfilePic} alt="Profile Picture" />
      </div>
    </div>
  )
}