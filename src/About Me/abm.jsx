import "./style/abm.css"
import { Tittle } from "./tittle"
import { Description } from "./description"
import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export function AboutMe() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: containerRef.current,
        start: "top 5%", // Pins smoothly explicitly at the very top of view
        end: "bottom 300px",
        scrub: 1,
        pin: true, // Locks the section in place
      }
    })

    // Phase 1: Heading slides up, background becomes solidly dark to hide the landing page elements safely
    tl.fromTo(containerRef.current, 
      { y: 100, backgroundColor: "rgba(10, 10, 10, 0.4)" },
      { y: 0, backgroundColor: "rgba(10, 10, 10, 0.95)", duration: 1, ease: "power2.out" },
    0)

    tl.from(".abm-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "<")

    // Phase 2: Description text (left) and Profile pic (right).
    tl.from(".abm-desc", {
      x: -250,
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, 0.5)

    tl.from(".profile-pic", {
      x: 250,
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    }, 0.5)

    // Phase 3: Hold the completed state on-screen for a shorter period
    tl.to({}, { duration: 0.4 })

  }, { scope: containerRef })

  return (
    <div className="about-me" ref={containerRef}>
      <Tittle />  
      <Description />
    </div>
  )
}
