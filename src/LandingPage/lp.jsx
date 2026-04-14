import { Navbar } from "./top-section"
import "./style/lp.css"
import { HeroSection } from "./hero-section"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)


export function LandingPage() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from('.navbar', { opacity: 0, y: -100, scale: 1.5, duration: 1, ease: 'power2.out' })
      .from('.right-side', { opacity: 0, x: 100, duration: 1, ease: 'power2.out' }, "<")
      .from('.hero-section', { opacity: 0, y: 100, scale: 1.5, duration: 1, ease: 'power2.out' }, "<")
      .from('.left-side', { opacity: 0, x: -100, duration: 1, ease: 'power2.out' }, "<");

    if (window.__PRELOADER_FINISHED) {
      tl.play();
    } else {
      const fireEntrance = () => tl.play();
      window.addEventListener('preloaderFinished', fireEntrance);
      return () => window.removeEventListener('preloaderFinished', fireEntrance);
    }
  })

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
    </div>
  )
}
