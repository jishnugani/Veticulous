import React from "react";
import IconBar from "./components/IconBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Header from "./components/Header"; // Already imported
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Render the Header */}
      <Header />

      {/* IconBar will now stay beside other sections */}
      <IconBar />

      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;
