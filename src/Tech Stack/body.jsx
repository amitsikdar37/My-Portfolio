import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './style/body.css'
import ReactIcon from './assets/icons/React.svg'
import JavaScript from './assets/icons/JavaScript.svg'
import Html from './assets/icons/Html.svg'
import Css from './assets/icons/CSS.svg'
import Express from './assets/icons/Express.svg'
import MongoDB from './assets/icons/MongoDB.svg'
import Python from './assets/icons/Python.svg'
import Solidity from './assets/icons/Solidity.svg'
import Figma from './assets/icons/Figma.svg'
import N8n from './assets/icons/n8n.svg'
import Git from './assets/icons/Git.svg'
import Github from './assets/icons/Github.svg'
import VSCode from './assets/icons/VS Code.svg'
import Vercel from './assets/icons/Vercel.svg'
import Jupyter from './assets/icons/Jupyter.svg'

import { TsCard } from './ts-cards'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Body() {
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  }

  useGSAP(() => {
    // 1. Scroll Fly-in Entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      }
    });

    tl.from('.ts-card', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
    });

    // 2. Continuous Floating Loop (starts after initial entrance animation)
    tl.add(() => {
      gsap.to('.ts-card', {
        y: "-=10",
        yoyo: true,
        repeat: -1,
        duration: 2.5,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div className='body-container' ref={containerRef} onMouseMove={handleMouseMove}>
      <TsCard
        logo={ReactIcon}
        techName={'React'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={JavaScript}
        techName={'JavaScript'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Html}
        techName={'Html'}
        mastery={'Advance'}
      />
      
      <TsCard
        logo={Css}
        techName={'CSS'}
        mastery={'Advance'}
      />

      <TsCard
        logo={Express}
        techName={'Express'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={MongoDB}
        techName={'MongoDB'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Python}
        techName={'Python'}
        mastery={'Advance'}
      />

      <TsCard
        logo={Solidity}
        techName={'Solidity'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Figma}
        techName={'Figma'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={N8n}
        techName={'N8n'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Git}
        techName={'Git'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Github}
        techName={'Github'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={VSCode}
        techName={'VS Code'}
        mastery={'Intermediate'}
      />

      <TsCard
        logo={Vercel}
        techName={'Vercel'}
        mastery={'Beginner'}
      />

      <TsCard
        logo={Jupyter}
        techName={'Jupyter'}
        mastery={'Beginner'}
      />

    </div>
  )
}