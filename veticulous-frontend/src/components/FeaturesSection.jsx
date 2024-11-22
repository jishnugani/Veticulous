import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Animal Welfare</h3>
          <p>Promoting the well-being and safety of all animals through education and advocacy.</p>
        </div>
        <div className="feature-card">
          <h3>Veterinary Sciences</h3>
          <p>Advancing the field with cutting-edge research and collaboration with experts.</p>
        </div>
        <div className="feature-card">
          <h3>Community Awareness</h3>
          <p>Raising awareness about critical issues affecting animals and their habitats.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;