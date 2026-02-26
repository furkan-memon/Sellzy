import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategorySlider from "./components/categories ";
import Products from './components/Products'
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar is NOT inside a container here so it can be full-width */}
      <Navbar />

      {/* Hero and other sections ARE inside the centered wrapper */}
      <main className="max-w-[1440px] mx-auto px-4 xl:px-10 mt-8">
        <Hero />
        <CategorySlider />
        <Products />
      </main>
    </div>
  );
};

export default App;