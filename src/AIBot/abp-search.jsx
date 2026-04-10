import { useState, useRef } from 'react';
import './style/abp-search.css';

import askBtn from './assets/icons/ask button.svg';
import meIcon from './assets/icons/Me.svg';
import projectsIcon from './assets/icons/Projects.svg';
import skillsIcon from './assets/icons/Skills.svg';
import contactIcon from './assets/icons/Contact.svg';

export function AbpSearch({ onSendMessage, isLoading, chatActive }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleQuickAction = (topic) => {
    if (!isLoading) {
      let prompt = '';
      if (topic === 'Me') prompt = 'Tell me about Amit and his background.';
      if (topic === 'Projects') prompt = 'What projects has Amit built?';
      if (topic === 'Skills') prompt = 'What are Amit\'s technical skills?';
      if (topic === 'Contact') prompt = 'How can I contact Amit?';
      onSendMessage(prompt);
    }
  };

  return (
    <div className={`abp-search-container ${chatActive ? 'chat-active' : ''}`}>
      <div className='abp-search-bar'>
        <input 
          type="text" 
          placeholder="Ask me anything..." 
          className="abp-search-input" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button className="abp-ask-btn" onClick={handleSend} disabled={isLoading}>
          <img src={askBtn} alt="Ask" />
        </button>
      </div>
      <div className='abp-quick-actions'>
        <button className='abp-action-btn' onClick={() => handleQuickAction('Me')} disabled={isLoading}>
          <img src={meIcon} alt="Me" className="abp-icon-me" />
          <span>Me</span>
        </button>
        <button className='abp-action-btn' onClick={() => handleQuickAction('Projects')} disabled={isLoading}>
          <img src={projectsIcon} alt="Projects" className="abp-icon-projects" />
          <span>Projects</span>
        </button>
        <button className='abp-action-btn' onClick={() => handleQuickAction('Skills')} disabled={isLoading}>
          <img src={skillsIcon} alt="Skills" className="abp-icon-skills" />
          <span>Skills</span>
        </button>
        <button className='abp-action-btn' onClick={() => handleQuickAction('Contact')} disabled={isLoading}>
          <img src={contactIcon} alt="Contact" className="abp-icon-contact" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  )
}
