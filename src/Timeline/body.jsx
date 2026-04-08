import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

import './style/body.css'
import { Card } from './card.jsx'

import Now from './assets/icons/Now.svg'
import Previous from './assets/icons/Previous.svg'


export function Body () {

  const containerRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: containerRef })

  const mouseEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: '-10px',
      scale: 1.05,
      filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1))',
      zIndex: 10,
      duration: 0.5,
      ease: 'power2.out'
    })
  })

  const mouseLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: '0px',
      scale: 1,
      filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
      zIndex: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
  })

  return (
    <div className='tl-body-container' ref={containerRef}>
      <div className='tl-body-left'>
        <Card 
          title1='Building'
          title2='AI Agent'
          description1='Improving and Making'
          description2='Contents'
          month='NOW'
          year= {null}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
        <Card 
          title1='UI'
          title2='Designer'
          description1='Learned UI'
          description2='Designing'
          month='March'
          year='2026'
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
        <Card 
          title1='Backend'
          title2='Developer'
          description1='Learned Backend'
          description2='Development'
          month='April'
          year='2025'
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
        <Card 
          title1='Python'
          title2='Developer'
          description1='Entered The Coding'
          description2='World'
          month='July'
          year='2024'
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
      </div>
      <div className='tl-body-partition'>
        <div className='partition-line' />
        <div className='circle-container'>
          <div>
            <img src={Now} alt="Now" />
          </div>
          <div>
            <img src={Previous} alt="Previous" />
          </div>
          <div>
            <img src={Previous} alt="Previous" />
          </div>
          <div>
            <img src={Previous} alt="Previous" />
          </div>
        </div>
      </div>
      <div className='tl-body-right'>
        <div className='summary'>
          <p>
            Architecting autonomous systems and documenting the build process for my YouTube community. Specializing in RAG-based agents and LLM integration to bridge the gap between static code and active intelligence.
          </p>
          <p>
            Mastering the art of high-fidelity, dark-mode aesthetics and user-centric flows in Figma. Applying modern design principles to ensure technical products are not just powerful, but visually compelling and intuitive.
          </p>
          <p>
            Deep-diving into the MERN stack to build robust server-side architectures and scalable APIs. Focused on database optimization and secure backends for decentralized applications and complex web ecosystems.
          </p>
          <p>
            Initiated my coding journey with Python, mastering the fundamentals of logic through automation and data analysis. Built a strong foundation in scripting and my first steps into the world of AI.
          </p>
        </div>
      </div>
    </div>
  )
}