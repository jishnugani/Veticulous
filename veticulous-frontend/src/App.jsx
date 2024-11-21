import React from 'react';
import IconBar from './components/IconBar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <IconBar />
      <div className="content">
        <h1>Welcome to Our Veterinary Medicine & Sciences Organization</h1>
        <p>
          Promoting animal welfare and awareness through knowledge and care. 
          Explore our blog, meet our team, and learn about our vision.
        </p>
      </div>
    </div>
  );
};

export default App;