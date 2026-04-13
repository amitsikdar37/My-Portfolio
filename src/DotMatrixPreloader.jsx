import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './style/dot-matrix.css';

gsap.registerPlugin(useGSAP);

// 3x5 Boolean mapping for standard digits and characters
const DICT = {
  0: [1,1,1, 1,0,1, 1,0,1, 1,0,1, 1,1,1],
  1: [0,1,0, 1,1,0, 0,1,0, 0,1,0, 1,1,1],
  2: [1,1,1, 0,0,1, 1,1,1, 1,0,0, 1,1,1],
  3: [1,1,1, 0,0,1, 1,1,1, 0,0,1, 1,1,1],
  4: [1,0,1, 1,0,1, 1,1,1, 0,0,1, 0,0,1],
  5: [1,1,1, 1,0,0, 1,1,1, 0,0,1, 1,1,1],
  6: [1,1,1, 1,0,0, 1,1,1, 1,0,1, 1,1,1],
  7: [1,1,1, 0,0,1, 0,1,0, 0,1,0, 0,1,0],
  8: [1,1,1, 1,0,1, 1,1,1, 1,0,1, 1,1,1],
  9: [1,1,1, 1,0,1, 1,1,1, 0,0,1, 1,1,1],
  '/': [0,0,1, 0,0,1, 0,1,0, 1,0,0, 1,0,0],
  'D': [1,1,0, 1,0,1, 1,0,1, 1,0,1, 1,1,0],
  'E': [1,1,1, 1,0,0, 1,1,0, 1,0,0, 1,1,1],
  'V': [1,0,1, 1,0,1, 1,0,1, 1,0,1, 0,1,0]
}

// 7x5 Array for the giant dotted pointer arrow
const ARROW_RIGHT = [
  0,0,0,0,1,0,0,
  0,0,0,0,1,1,0,
  1,1,1,1,1,1,1,
  0,0,0,0,1,1,0,
  0,0,0,0,1,0,0
];

function DotArrow() {
  return (
    <div className="matrix-arrow">
       {ARROW_RIGHT.map((isActive, i) => (
          <div key={i} className={`matrix-dot ${isActive ? 'active' : ''}`} />
       ))}
    </div>
  )
}

function DotDigit({ charKey }) {
  const map = DICT[charKey] || DICT[0];
  return (
    <div className="dot-matrix-digit">
       {map.map((isActive, i) => (
          <div key={i} className={`matrix-dot ${isActive ? 'active' : ''}`} />
       ))}
    </div>
  )
}

export function DotMatrixPreloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0); 
  const [showingDev, setShowingDev] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    let proxy = { value: 0 };
    gsap.to(proxy, {
      value: 100,
      duration: 3, 
      ease: "power2.inOut",  // Emulates an authentic boot sequence (starts slow, pushes fast through middle, slows at end)
      onUpdate: () => {
        setCount(Math.round(proxy.value));
      },
      onComplete: () => {
        // Display /DEV transition text immediately
        setShowingDev(true);

        // Exit Timeline
        const exitTl = gsap.timeline({
          onComplete: () => setLoading(false),
          delay: 0.9 // Let /DEV sit on screen for almost a full second so user can register it
        });
        
        // Sweep curtain
        exitTl.to(containerRef.current, {
           yPercent: -100,
           duration: 0.9,
           ease: "power4.inOut"
        });
      }
    });

  }, { scope: containerRef });

  if (!loading) return null;

  // Feed standard integer array or explicit custom matrix string payload mapped into array elements
  const renderPayload = showingDev ? ['/', 'D', 'E', 'V'] : count.toString().split("");

  return (
    <div className="dot-matrix-container" ref={containerRef}>
       <div className="matrix-marker-top">SYSTEM LOADING...</div>
       <div className="matrix-marker-bottom">&gt; /AMIT</div>
       
       <DotArrow />

       <div className="matrix-scene">
          {renderPayload.map((char, idx) => (
              <DotDigit key={idx} charKey={char} />
          ))}
       </div>
    </div>
  );
}
