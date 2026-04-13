import { createContext, useContext, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const overlayRef = useRef(null);
  const circleRef = useRef(null);
  const navigate = useNavigate();

  // Called by nav buttons with the click event and target route
  const transitionTo = useCallback((e, path) => {
    const x = e.clientX;
    const y = e.clientY;

    const overlay = overlayRef.current;
    const circle = circleRef.current;
    if (!overlay || !circle) return;

    // Position the circle at click origin, hidden
    gsap.set(circle, {
      x,
      y,
      scale: 0,
      opacity: 1,
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(overlay, { display: 'block' });

    // Expand the circle to cover the full screen
    const maxDimension = Math.hypot(window.innerWidth, window.innerHeight) * 2.2;

    gsap.to(circle, {
      scale: maxDimension / 80, // 80 = base diameter in px
      duration: 0.65,
      ease: 'power3.in',
      onComplete: () => {
        navigate(path);
        // Reveal the new page by shrinking the circle back
        gsap.to(circle, {
          scale: 0,
          duration: 0.55,
          ease: 'power3.out',
          delay: 0.08,
          onComplete: () => {
            gsap.set(overlay, { display: 'none' });
          },
        });
      },
    });
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      {/* Full-screen overlay sits on top of everything */}
      <div
        ref={overlayRef}
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          ref={circleRef}
          style={{
            position: 'absolute',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: '#050505',
            willChange: 'transform',
          }}
        />
      </div>
    </TransitionContext.Provider>
  );
}

// Hook for easy consumption
export function useTransition() {
  return useContext(TransitionContext);
}
