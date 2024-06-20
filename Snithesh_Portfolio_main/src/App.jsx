import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Journey from "./components/journey/Journey";
import Projects from "./components/projects/Projects";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Journey />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
