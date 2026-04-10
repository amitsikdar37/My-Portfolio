import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './style/ai-bot-page.css';
import { Heading } from './abp-heading';
import { AbpSearch } from './abp-search';
import homeIcon from './assets/icons/Home.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function AIBotPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatActive = messages.length > 0;
  const containerRef = useRef(null);
  const chatEndRef = useRef(null);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text, id: Date.now() };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessages((prev) => [...prev, { role: 'ai', content: data.error || 'Something went wrong.', isError: true, id: Date.now() + 1 }]);
        return;
      }

      setMessages((prev) => [...prev, { role: 'ai', content: data.response, id: Date.now() + 1 }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', content: 'Failed to connect to the server.', isError: true, id: Date.now() + 1 }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <div className="ai-bot-page" ref={containerRef}>
      <div className='ellipse'></div>

      <Link to="/" className="abp-home-btn">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>

      {/* Heading: always rendered, minimizes to top-center when chat is active */}
      <Heading chatActive={chatActive} />

      {/* Main chat content */}
      <div className={`chat-wrapper ${chatActive ? 'chat-active' : ''}`}>
        {chatActive && (
          <div className="chat-history">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble ${msg.role} ${msg.isError ? 'error' : ''}`}>
                <div className="bubble-content">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble ai typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        )}

        <AbpSearch onSendMessage={sendMessage} isLoading={isLoading} chatActive={chatActive} />
      </div>
    </div>
  );
}
