import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './style/liquid-preloader.css';

gsap.registerPlugin(useGSAP);

export function LiquidPreloader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(() => {
    const sloshTl = gsap.timeline({ repeat: -1 });
    sloshTl.fromTo(textRef.current, { "--wave-x": "0px" }, { "--wave-x": "-300px", duration: 1.2, ease: "none" });

    let proxy = { percent: 0 }; 
    
    gsap.to(proxy, {
      percent: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentHeight = textRef.current ? textRef.current.offsetHeight : 300;
        const bottomInk = currentHeight * 0.8; 
        const topInk = -40; 
        const mappedY = bottomInk - (proxy.percent / 100) * (bottomInk - topInk);
        if (counterRef.current) counterRef.current.innerText = `loading... ${Math.round(proxy.percent)} %`;
        if (textRef.current) textRef.current.style.setProperty('--wave-y', `${mappedY}px`);
      },
      onComplete: () => {
        const exitTl = gsap.timeline({
          delay: 0.3,
          onComplete: () => {
            setLoading(false);
            window.__PRELOADER_FINISHED = true;
            window.dispatchEvent(new CustomEvent('preloaderFinished')); 
          }
        });
        exitTl.to(counterRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' }, 0);
        exitTl.to(textRef.current, { scale: 15, duration: 1.5, ease: 'power4.inOut' }, 0);
        exitTl.to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0.6);
      }
    });

  }, { scope: containerRef });

  if (!loading) return null;

  return (
    <div className="liquid-container" ref={containerRef}>
      <div className="liquid-wrapper">
         <h1 className="liquid-text" ref={textRef}>PORTFOLIO.</h1>
         <div className="liquid-status" ref={counterRef}>loading... 0 %</div>
      </div>
    </div>
  );
}
