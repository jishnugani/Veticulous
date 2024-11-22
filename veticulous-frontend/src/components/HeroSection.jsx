import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./HeroSection.css";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Searching for:", term); // Replace with actual search functionality
  };

  return (
    <section className="hero-section">
      <h1>Welcome to Vet Organization</h1>
      <p>
        Promoting animal welfare and awareness through veterinary medicine and science.
      </p>
      <SearchBar placeholder="Search our site..." onSearch={handleSearch} />
      <a href="#about">Learn More</a>
    </section>
  );
};

export default HeroSection;
