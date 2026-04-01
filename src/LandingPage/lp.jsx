import { Navbar } from "./top-section"
import "./style/lp.css"
import { HeroSection } from "./hero-section"

export function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
    </div>
  )
}
