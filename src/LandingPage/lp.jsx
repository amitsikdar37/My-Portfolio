import { Navbar } from "./top-section"
import "./style/lp.css"
import { HeroSection } from "./hero-section"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)


export function LandingPage() {
  useGSAP(() => {
    gsap.from('.navbar', {
      opacity: 0,
      y: -100,
      scale: 1.5,
      duration: 1,
      ease: 'power2.out'
    })

    gsap.from('.right-side', {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power2.out'
    })

    gsap.from('.hero-section', {
      opacity: 0,
      y: 100,
      scale: 1.5,
      duration: 1,
      ease: 'power2.out'
    })

    gsap.from('.left-side', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power2.out'
    })
  })

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
    </div>
  )
}
