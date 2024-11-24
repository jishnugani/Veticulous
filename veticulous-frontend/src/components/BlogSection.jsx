import React, { useEffect, useRef, useState } from 'react';
import './BlogSection.css';

const BlogSection = () => {
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
      className={`blog-section ${isVisible ? 'fade-in' : 'fade-out'}`}
    >
      <h2>Our Blog</h2>
      <p>
        Explore our latest articles and insights into animal health, welfare,
        and veterinary science.
      </p>

      <div className="blog-cards">
        <div className="blog-card">
          <h3>How to Care for Your Pet</h3>
          <p>Learn tips and tricks to keep your furry friends happy and healthy.</p>
        </div>
        <div className="blog-card">
          <h3>Veterinary Breakthroughs</h3>
          <p>Discover the latest advancements in veterinary medicine and science.</p>
        </div>
        <div className="blog-card">
          <h3>Animal Welfare</h3>
          <p>Understand the importance of animal welfare and how you can help.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
