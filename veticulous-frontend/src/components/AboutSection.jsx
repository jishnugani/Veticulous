import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? 'fade-in' : 'fade-out'}`}
    >
      {/* Add an icon or illustration for visual impact */}
      <div className="icon">🐾</div>

      <h2>About Us</h2>
      <p>
        We are dedicated to promoting animal welfare and spreading awareness
        through veterinary medicine and science.
      </p>
    </section>
  );
};

export default AboutSection;
