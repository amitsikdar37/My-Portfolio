import { Link } from 'react-router-dom'
import youtube from "./assets/icons/Youtube.svg"
import X from "./assets/icons/X.svg"
import github from "./assets/icons/Github.svg"
import linkedin from "./assets/icons/linkedin.svg"
import "./style/hero-section.css"

export function HeroSection() {
  return(
    <div className="hero-section">
      <div className="my-name">
        <p>
          Hi,I'm Amit
        </p>
      </div>
      <div className="my-title">
        <p>
          AI Agent Developer | Full Stack Developer |<br/> Grpahic Designer | Youtuber
        </p>
      </div>
      <div className="btn-container">
        <div className="btn">
          <Link to="/projects">
            <button className="view-projects">View Projects</button>
          </Link>
          <button className="youtube">
            Youtube
            <img src={youtube} alt="youtube" />
          </button>
        </div>
        <div className="social-btn">
          <button className="X-btn">
            <img src={X}/>
          </button>
          <button className="github-btn">
            <img src={github}/>
          </button>
          <button className="linkedin-btn">
            <img src={linkedin}/>
          </button>
        </div>
      </div>
    </div>
  )
}