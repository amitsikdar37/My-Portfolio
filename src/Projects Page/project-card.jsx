import './style/project-card.css';
import CalendarIcon from './assets/icons/Calendar.png';
import GithubIcon from './assets/icons/Github.svg';
import LinkIcon from './assets/icons/LinkIcon.svg';

export function ProjectCard({
  imageSrc,
  topic,
  year,
  title,
  description,
  techStack,
  features,
  liveLink,
  codeLink
}) {
  return (
    <div className="project-card-container">
      <div className="project-card-bg"></div>

      <div className="project-card-inner">
        <div className="project-card-image-box">
          <img src={imageSrc} alt={title} className="project-card-image" />
        </div>

        <div className="project-card-metadata-box">

          <div className="project-meta-row">
            <div className="project-topic">
              <span>{topic}</span>
            </div>
            <div className="project-date">
              <img src={CalendarIcon} alt="Year" />
              <span>{year}</span>
            </div>
          </div>

          <div className="project-text-box">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>

            <div className="project-tech-stack">
              {techStack?.map((tech, idx) => (
                <div key={idx} className="tech-pill">
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-action-row">
            <a href={liveLink} target="_blank" rel="noreferrer" className="action-btn live-btn">
              <img src={LinkIcon} alt="Live" className="live-icon" />
              <span>Live Demo</span>
            </a>
            <a href={codeLink} target="_blank" rel="noreferrer" className="action-btn code-btn">
              <span>Code</span>
              <img src={GithubIcon} alt="Code" className="code-icon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
