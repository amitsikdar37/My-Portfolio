import "./style/description.css"
import ProfilePic from "./assets/img/Photo Frame.png"

export function Description() {
  return (
    <div className="abm-desc-container">
      <div className="abm-desc">
        <p>
          I'm Amit, a developer at IIT Patna architecting the intersection of autonomous AI and high-end design. My work spans from engineering intelligent agents to building scalable full-stack ecosystems, always with a graphic designer's eye for aesthetics.
        </p>
        <p>
          Through my YouTube channel, I document the journey of mastering complex tech to inspire the next generation of builders.I’m a builder by nature, a student by choice, and a creator by heart.
        </p>
      </div>
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile Picture" />
      </div>
    </div>
  )
}