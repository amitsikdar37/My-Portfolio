import { Navbar } from "./top-section"
import "./style/lp.css"
import { HeroSection } from "./hero-section"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)


export function LandingPage() {
  useGSAP(() => {
    // Stage elements but pause animation so they hover invisibly while the curtain blocks them
    const tl = gsap.timeline({ paused: true });

    // Mount identical animations simultaneously directly to the timeline
    tl.from('.navbar', { opacity: 0, y: -100, scale: 1.5, duration: 1, ease: 'power2.out' })
      .from('.right-side', { opacity: 0, x: 100, duration: 1, ease: 'power2.out' }, "<")
      .from('.hero-section', { opacity: 0, y: 100, scale: 1.5, duration: 1, ease: 'power2.out' }, "<")
      .from('.left-side', { opacity: 0, x: -100, duration: 1, ease: 'power2.out' }, "<");

    // Dynamic execution branch
    if (window.__PRELOADER_FINISHED) {
      // If the user navigates back to the landing page later, the preloader won't fire again, so just play the animation straight away.
      tl.play();
    } else {
      // We are waiting for the preloader to announce its completion mathematically
      const fireEntrance = () => tl.play();
      window.addEventListener('preloaderFinished', fireEntrance);
      return () => window.removeEventListener('preloaderFinished', fireEntrance); // Clean out references when navigating away
    }
  })

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
    </div>
  )
}
