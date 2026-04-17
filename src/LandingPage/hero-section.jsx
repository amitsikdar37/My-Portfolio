import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import youtube from "./assets/icons/Youtube.svg"
import X from "./assets/icons/X.svg"
import github from "./assets/icons/Github.svg"
import linkedin from "./assets/icons/linkedin.svg"
import "./style/hero-section.css"

export function HeroSection() {
  const Hero_btn = useRef(null)

  const { contextSafe } = useGSAP({ scope: Hero_btn })

  const onEnterHero = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: -10,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out"
    })
  })

  const onLeaveHero = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut"
    })
  })

  const onPressHero = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      scale: 0.92,
      duration: 0.1,
      ease: "power2.out"
    })
  })

  const onReleaseHero = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  })

  const onEnterSocial = contextSafe((e) => {
    const btn = e.currentTarget;
    const iconWrap = btn.querySelector('.icon-wrap');
    const label = btn.querySelector('.label');
    const img = btn.querySelector('img');

    gsap.to(btn, {
      width: 170,
      backgroundColor: "#FFFFFF",
      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(iconWrap, {
      backgroundColor: "#FFFFFF",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(img, {
      filter: "brightness(0)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(label, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      delay: 0.1,
      ease: "power2.out",
      overwrite: true
    });
  });

  const onLeaveSocial = contextSafe((e) => {
    const btn = e.currentTarget;
    const iconWrap = btn.querySelector('.icon-wrap');
    const label = btn.querySelector('.label');
    const img = btn.querySelector('img');

    gsap.to(btn, {
      width: 50,
      backgroundColor: "transparent",
      boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
      duration: 0.35,
      ease: "power2.inOut",
      overwrite: true
    });

    gsap.to(iconWrap, {
      backgroundColor: "transparent",
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: true
    });

    gsap.to(img, {
      filter: "brightness(1) invert(0)",
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: true
    });

    gsap.to(label, {
      opacity: 0,
      x: -10,
      duration: 0.2,
      ease: "power2.in",
      overwrite: true
    });
  });

  return (
    <div className="hero-section">
      <div className="my-name">
        <p>
          Hi,I'm Amit
        </p>
      </div>
      <div className="my-title">
        <p>
          AI Agent Developer | Full Stack Developer |<br /> Graphic Designer | Youtuber
        </p>
      </div>
      <div className="btn-container" ref={Hero_btn}>
        <div className="btn">
          <Link to="/projects">
            <button
              className="view-projects"
              onMouseEnter={onEnterHero}
              onMouseLeave={onLeaveHero}
              onMouseDown={onPressHero}
              onMouseUp={onReleaseHero}
            >View Projects</button>
          </Link>
          <button
            className="youtube"
            onMouseEnter={onEnterHero}
            onMouseLeave={onLeaveHero}
            onMouseDown={onPressHero}
            onMouseUp={onReleaseHero}
            onClick={() => window.open("https://www.youtube.com/@AmitBuilds-y4y", "_blank")}
          >
            Youtube
            <img src={youtube} alt="youtube" />
          </button>
        </div>
        <div className="social-btn">
          <button
            className="X-btn"
            onMouseEnter={onEnterSocial}
            onMouseLeave={onLeaveSocial}
            onClick={() => window.open("https://x.com/Amit1475571", "_blank")}
          >
            <div className="icon-wrap">
              <img src={X} alt="X" />
            </div>
            <span className="label">X</span>
          </button>
          <button
            className="github-btn"
            onMouseEnter={onEnterSocial}
            onMouseLeave={onLeaveSocial}
            onClick={() => window.open("https://github.com/amitsikdar37", "_blank")}
          >
            <div className="icon-wrap">
              <img src={github} alt="Github" />
            </div>
            <span className="label">Github</span>
          </button>
          <button
            className="linkedin-btn"
            onMouseEnter={onEnterSocial}
            onMouseLeave={onLeaveSocial}
            onClick={() => window.open("https://www.linkedin.com/in/amit-sikdar-b1b6212a0", "_blank")}
          >
            <div className="icon-wrap">
              <img src={linkedin} alt="Linkedin" />
            </div>
            <span className="label">Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  )
}
