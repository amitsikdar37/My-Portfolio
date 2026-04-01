import './style/abp-search.css';

import askBtn from './assets/icons/ask button.svg';
import meIcon from './assets/icons/Me.svg';
import projectsIcon from './assets/icons/Projects.svg';
import skillsIcon from './assets/icons/Skills.svg';
import contactIcon from './assets/icons/Contact.svg';

export function AbpSearch() {
  return (
    <div className='abp-search-container'>
      <div className='abp-search-bar'>
        <input type="text" placeholder="Ask me anything..." className="abp-search-input" />
        <button className="abp-ask-btn">
          <img src={askBtn} alt="Ask" />
        </button>
      </div>
      <div className='abp-quick-actions'>
        <button className='abp-action-btn'>
          <img src={meIcon} alt="Me" className="abp-icon-me" />
          <span>Me</span>
        </button>
        <button className='abp-action-btn'>
          <img src={projectsIcon} alt="Projects" className="abp-icon-projects" />
          <span>Projects</span>
        </button>
        <button className='abp-action-btn'>
          <img src={skillsIcon} alt="Skills" className="abp-icon-skills" />
          <span>Skills</span>
        </button>
        <button className='abp-action-btn'>
          <img src={contactIcon} alt="Contact" className="abp-icon-contact" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  )
}
