import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./style/tl.css"
import { Heading } from "./heading"
import { Body } from "./body.jsx"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Timeline() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Heading animation: slides up line-by-line when checking viewport
    // Once it plays, it stays visible.
    let headingMaxProgress = 0;
    const headingTl = gsap.timeline({ paused: true });
    headingTl.from('.heading p', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });

    ScrollTrigger.create({
      trigger: '.timeline-container',
      start: 'top 80%',
      onEnter: () => headingTl.play() // Play once automatically when reaching trigger
    });

    // Setup initial states
    gsap.set('.partition-line', { transformOrigin: 'top center', scaleY: 0 });
    const cards = gsap.utils.toArray('.card');
    const summaries = gsap.utils.toArray('.summary p');
    const circles = gsap.utils.toArray('.circle-container div img');

    gsap.set(cards, { x: -50, opacity: 0 });
    gsap.set(summaries, { x: 50, opacity: 0 });
    gsap.set(circles, { opacity: 0, scale: 0.8, filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))' });

    // Master Timeline (paused initially)
    const tl = gsap.timeline({ paused: true });

    let maxProgress = 0;
    ScrollTrigger.create({
      trigger: '.tl-body-container',
      start: 'top 65%',
      end: 'bottom 40%',
      onUpdate: (self) => {
        // Only allow progress to increase (forward scrub only)
        if (self.progress > maxProgress) {
          maxProgress = self.progress;
          // Apply a 1.5s smoothing effect to match the previous scrub: 1.5 behavior
          gsap.to(tl, { progress: maxProgress, duration: 1.5, overwrite: "auto", ease: "power2.out" });
        }
      }
    });

    // 1. The line draws downwards and gains a subtle glow
    tl.to('.partition-line', {
      scaleY: 1,
      ease: 'none',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
      duration: 1
    }, 0);

    // 2. Animate items as the line drops. 
    // The items are vertically spaced out, so we trigger them at 10%, 35%, 60%, 85% of the total line draw duration.
    cards.forEach((card, i) => {
      const startPos = i * 0.25 + 0.1; // e.g. 0.1, 0.35, 0.60, 0.85

      // Card slides in from left
      tl.to(card, { x: 0, opacity: 1, duration: 0.1, ease: 'power2.out' }, startPos);

      // Summary slides in from right
      tl.to(summaries[i], { x: 0, opacity: 1, duration: 0.1, ease: 'power2.out' }, startPos);

      // Circle fading in, scaling up, and lighting up (Red for 'Now' at index 0, Green for 'Previous')
      const glowColor = i === 0 ? 'rgba(238, 48, 48, 0.8)' : 'rgba(79, 228, 84, 0.8)';
      tl.to(circles[i], { opacity: 1, scale: 1, filter: `drop-shadow(0 0 20px ${glowColor})`, duration: 0.1 }, startPos);
    });

  }, { scope: containerRef });

  return (
    <div className="timeline-page" ref={containerRef}>
      <div className="timeline-container">
        <Heading />
        <Body />
      </div>
    </div>
  )
}
