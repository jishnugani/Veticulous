import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
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
      className={`hero-section ${isVisible ? 'fade-in' : 'fade-out'}`}
    >
      <div className="hero-content">
        <h1>Welcome to Vet Organization</h1>
        <p>
          Promoting animal welfare and awareness through veterinary medicine and science.
        </p>
        <div className="search-container">
          <input type="text" placeholder="Search our site..." />
          <button>Learn More</button>
        </div>
      </div>
      <div className="hero-images">
        <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/150" alt="Placeholder 3" />
      </div>
    </section>
  );
};

export default HeroSection;
