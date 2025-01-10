import React from 'react'
import { useEffect } from 'react';
const HeroBg = ({children}) => {

    useEffect(() => {
        const handleMouseMove = (event) => {
            const interactive = document.querySelector('.interactive');
            const { clientX, clientY } = event;
            interactive.style.transform = `translate(${clientX}px, ${clientY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  return (
    <div>
        <div class="hero-section">
  <div class="text-container">{children}</div>
  {/* <div class="gradient-bg">
    <div class="g1"></div>
    <div class="g2"></div>
    <div class="g3"></div>
    <div class="g4"></div>
    <div class="g5"></div>
  </div> */}
    <div class="interactive"></div>
</div>

    </div>
  )
}

export default HeroBg