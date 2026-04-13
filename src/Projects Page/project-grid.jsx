import './style/project-grid.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './project-card';
import finagentImg from './assets/img/finagent.png';
import stockpredictorImg from './assets/img/stockpredictor.png';
import univoteImg from './assets/img/univote.png';
import whatsappImg from './assets/img/whatsappaibot.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProjectGrid() {
  const gridRef = useRef(null);
  const projectsData = [
    {
      imageSrc: stockpredictorImg,
      topic: "AI Agent",
      year: "2026",
      title: "QuantNet: Triple-Threat Stock Predictor",
      description: "Autonomous n8n agent utilizing a 'Triple Threat' data strategy—Technical, Fundamental, and Sentiment analysis to predict stock price movements and estimate potential daily gains.",
      techStack: ["Gemini", "N8n", "JavaScript"],
      features: [
        "Multi-Source Data Ingestion (Technical + Fundamental)",
        "Real-time News Sentiment Analysis",
        "Predictive ROI Estimation"
      ],
      liveLink: "#",
      codeLink: "#"
    },
    {
      imageSrc: finagentImg,
      topic: "AI Agent",
      year: "2025",
      title: "FinAgent: Autonomous Expense Intelligence",
      description: "Autonomous AI assistant extracting financial data from WhatsApp and email to automate expense tracking via real-time Google Sheets synchronization and intelligent analysis.",
      techStack: ["Gemini", "N8n", "JavaScript"],
      features: [
        "AI-Powered Receipt Parsing (OCR)",
        "Multi-Channel Ingestion (WhatsApp/Email)",
        "Autonomous Sheets Synchronization"
      ],
      liveLink: "#",
      codeLink: "#"
    },
    {
      imageSrc: univoteImg,
      topic: "Full-Stack",
      year: "2025",
      title: "UniVote: Blockchain Based Voting - System",
      description: "Decentralized voting platform utilizing blockchain technology to ensure transparent, tamper-proof election results through secure smart contracts and an immutable digital ledger system.",
      techStack: ["Solidity", "Ethereum", "Express", "MongoDB", "Web3.js"],
      features: [
        "Immutable Smart Contract Logic",
        "Transparent, Publicly Verifiable Results",
        "Sybil-Resistant Voter Authentication"
      ],
      liveLink: "#",
      codeLink: "#"
    },
    {
      imageSrc: whatsappImg,
      topic: "AI Agent",
      year: "2025",
      title: "LlamaLink: Local-LLM WhatsApp AI Bot",
      description: "Autonomous agent utilizing a locally-hosted Llama model to monitor WhatsApp, parse incoming conversations, and generate intelligent, human-like responses in real-time.",
      techStack: ["Llama 3", "Selenium", "Express", "NLP", "Automation"],
      features: [
        "Privacy-First Local AI Inference",
        "Automated Browser-Based Interaction",
        "Adaptive Conversational Context"
      ],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  useGSAP(() => {
    // Phase 1: Aggressive Stagger Entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        once: true 
      }
    });

    tl.from('.project-card-float-wrapper', {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Cascades smoothly horizontally
      ease: 'back.out(1.7)'
    });

    // Phase 2: Beautiful continuous breathing float
    tl.add(() => {
      gsap.to('.project-card-float-wrapper', {
        y: "-=15",
        yoyo: true,
        repeat: -1,
        duration: 2.5,
        ease: 'sine.inOut',
        stagger: {
          amount: 1.5,
          from: "random" // Naturally desyncs the cards
        }
      });
    });
  }, { scope: gridRef });

  return (
    <div className="project-grid-container" ref={gridRef}>
      {projectsData.map((project, index) => (
        <div className="project-card-float-wrapper" key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}
