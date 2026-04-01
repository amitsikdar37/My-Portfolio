import { Link } from 'react-router-dom'
import logo from "./assets/icons/simple-icons_codecrafters.svg"
import vector from "./assets/icons/Vector.svg"
import "./style/top-section.css"

export function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top-section">
      <div className="left-side">
        <img src={logo} alt="logo" />
        <p>Amit.</p>
      </div>
      <div className="navbar">
        <div className="nav-item">
          <button onClick={() => scrollToSection('about')}>
            About Me
          </button>
        </div>
        <div className="nav-item">
          <Link to="/projects">
            <button>
              Projects
            </button>
          </Link>
        </div>
        <div className= "nav-item">
          <Link to="/ai-bot">
            <button>
              AI Bot
            </button>
          </Link>
        </div>
        <div className="nav-item">
          <button onClick={() => scrollToSection('contact')}>
            Socials
          </button>
        </div>
      </div>
      <div className="right-side">
        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          Contact
          <img src={vector} alt="arrow" className="contact-icon" />
        </button>
      </div>
    </div>
  )
}