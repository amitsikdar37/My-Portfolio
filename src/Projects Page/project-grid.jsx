import './style/project-grid.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './project-card';
import finagentImg from './assets/img/finagent.png';
import cocacolasite from './assets/img/CocaColaSite.png';
import univoteImg from './assets/img/univote.png';
import whatsappImg from './assets/img/whatsappaibot.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProjectGrid() {
  const gridRef = useRef(null);
  const projectsData = [
    {
      imageSrc: cocacolasite,
      topic: "Website",
      year: "2026",
      title: "Coca Cola Site",
      description: "A high-fidelity, cinematic web experience featuring a performance-optimized 3D bottle rotation powered by scroll-linked canvas frame sequences, delivering an immersive brand storytelling journey.",
      techStack: ["React.js", "GSAP", "Framer Motion", "Flow"],
      features: [
        "Scroll-Linked 3D Bottle Animation (Canvas-based)",
        "Smooth GSAP & Framer Motion Orchestration",
        "Responsive Glassmorphism Design System",
        "Performance-Optimized Asset Preloading"
      ],
      liveLink: "https://coca-coal-site.vercel.app/",
      codeLink: "https://github.com/amitsikdar37/coca-coal-site"
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
      liveLink: "https://univote-rls4aiekt-amitsikdar37s-projects.vercel.app/",
      codeLink: "https://github.com/amitsikdar37/univote"
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
      liveLink: "https://youtu.be/5cdCBXxTDXc?si=CjgjfTaMX1Jwz8M9",
      codeLink: "https://github.com/amitsikdar37/Omikun_Personal_AI_Assistant"
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
