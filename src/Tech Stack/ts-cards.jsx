import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import './style/ts-cards.css'

export function TsCard ({logo, techName, mastery}) {
  const cardRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: cardRef })

  const mouseEnter = contextSafe(() => {
    gsap.to('.logo', { y: -15, scale: 1.1, filter: 'drop-shadow(0 15px 25px rgba(255, 50, 50, 0.3))', duration: 0.4, ease: 'back.out(2)' })
  })

  const mouseLeave = contextSafe(() => {
    gsap.to('.logo', { y: 0, scale: 1, filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))', duration: 0.4, ease: 'power2.out' })
  })

  return (
    <div className='ts-card' ref={cardRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className='logo'>
        <img src={logo} className='logo-img'/>
      </div>
      <div className='ts-meta'>
        <div className='ts-meta-container'>
          <p className='tech-name'> {techName} </p>
          <p className={`mastery ${mastery.toLowerCase()}`}> {mastery} </p>
        </div>
      </div>
    </div>
  )
}