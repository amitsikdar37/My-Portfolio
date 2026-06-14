import './style/project-grid.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard } from './project-card';
import AtherSiteImg from './assets/img/AtherSite.png';
import cocacolasite from './assets/img/CocaColaSite.png';
import ashwathamaImg from './assets/img/ashwathama.png';
import seshnagImg from './assets/img/seshnag.png';
import trmsite from './assets/img/trmsite.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProjectGrid() {
  const gridRef = useRef(null);
  const projectsData = [
    {
      imageSrc: ashwathamaImg,
      topic: "Decentralized / CV",
      year: "2026",
      title: "Ashwathama: Airspace Threat Shield",
      description: "A post-radar drone interception system simulating supersonic missile defense. Employs YOLOv8 target detection on live feeds, Lucas-Kanade optical flow camera-motion compensation, and ad-hoc P2P UDP telemetry to dynamically coordinate interceptor drone swarms.",
      techStack: ["Python", "Flask", "YOLOv8", "OpenCV", "Socket.io", "UDP"],
      features: [
        "YOLOv8 Real-Time Supersonic Target Detection",
        "Lucas-Kanade Optical Flow Motion Tracking",
        "Autonomous Parallax Camera Auto-Alignment",
        "Decentralized Swarm Interceptor Allocation"
      ],
      liveLink: "https://youtube.com/shorts/ztD5_Y4_XLk?si=QMBM8mkIYOyWMQBr",
      codeLink: "https://github.com/amitsikdar37/triambaka/tree/main/ashwathama"
    },
    {
      imageSrc: seshnagImg,
      topic: "Web Application",
      year: "2026",
      title: "SeshNag: Smart Evacuation Route Planner",
      description: "A live civilian tracking and routing dashboard mapped in Patna, Bihar. Integrates Leaflet.js with OSRM Table API to find nearest secure bunkers using actual road networks, dynamically animating users along street geometry and sending emergency Telegram alerts.",
      techStack: ["Node.js", "Express", "Socket.io", "Leaflet.js", "OSRM API", "Telegram API"],
      features: [
        "OSRM Road Matrix Shelter Allocation",
        "Leaflet.js Dynamic Street Path Navigation",
        "Staggered API Requests to Prevent IP Rate Limits",
        "Automated Telegram Evacuation Broadcasting"
      ],
      liveLink: "https://youtube.com/shorts/hr_qmTFel-8?si=ztE5__6X4f-FjOp3",
      codeLink: "https://github.com/amitsikdar37/triambaka/tree/main/shelter%20locator"
    },
    {
      imageSrc: trmsite,
      topic: "Web Application / NGO",
      year: "2026",
      title: "The Revival Mission: NGO Platform",
      description: "A full-stack platform for a non-governmental organization (NGO) enabling seamless content management, gallery uploads, and community outreach. Features a secure administrative dashboard, MongoDB-backed dynamic asset storage with Base64 encoding, and robust production-ready deployment structures.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Mongoose", "Vercel", "Render"],
      features: [
        "Secure Admin Panel with Asset Upload & Removal",
        "MongoDB Database for Dynamic Gallery Management",
        "Base64 Image Encoding for Serverless Compatibility",
        "Environment-Specific Database Schemas (Dev/Prod)",
        "Interactive Contact & Integrated Social Media Links"
      ],
      liveLink: "https://trm-olive.vercel.app",
      codeLink: "https://github.com/amitsikdar37/TRM"
    },
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
      imageSrc: AtherSiteImg,
      topic: "Website",
      year: "2026",
      title: "Ather 450 Apex Site",
      description: "A high-fidelity digital showroom for the Ather 450 Apex featuring a performance-optimized 3D vehicle exploration. Powered by a scroll-linked sequence of 1,200+ high-resolution canvas frames, delivering an immersive brand storytelling journey.",
      techStack: ["React.js", "Tailwind CSS", "GSAP", "Canvas API"],
      features: [
        "Scroll-Linked 3D Canvas Rendering (1,200+ frames)",
        "Cinematic Preloader & Optimized Asset Loading",
        "Smooth GSAP Scroll-Triggered Transitions",
        "Responsive Glassmorphism UI & Dark Theme"
      ],
      liveLink: "https://ather-450-apex-site.vercel.app/",
      codeLink: "https://github.com/amitsikdar37/Ather_450_Apex-site"
    },    
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
