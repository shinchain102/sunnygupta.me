import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Colijala from "./components/Colijala";
import News from "./components/News.jsx";
import NewsSingle from "./components/NewsSingle.jsx";
import faArrowUp from "./assets/img/svg/arrow-up-line.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./styles/colijala.css";
import "./styles/homeMedia.css";
import "./styles/news_single.css";
import "./styles/news.css";
import "./styles/slick-theme.css";
import "./styles/style.css";
import AnimCursor from "./components/AnimatedCursor.jsx";

function App() {
  // Animation Scrolling
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // Bottom to Top Button functionality
  const [isVisible, setIsVisible] = useState(false);
  // Toggle Dark Button Functionality
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      if (body && window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
   // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkmode", newDarkModeState.toString());
  };

  // Effect to run on initial load
  useEffect(() => {
    // Check if document and document.body are available
    if (typeof document !== "undefined" && document.body) {
      const storedDarkMode = localStorage.getItem("darkmode") === "true";
      setIsDarkMode(storedDarkMode);
      document.body.classList.toggle("dark-mode", storedDarkMode);
    }
  }, []);

  // Effect to run when dark mode state changes
  useEffect(() => {
    // Check if document and document.body are available
    if (typeof document !== "undefined" && document.body) {
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode]);

 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App" id="main-div">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colijala" element={<Colijala />} />
        <Route path="/news" element={<News />} />
        <Route path="/news_single" element={<NewsSingle />} />
      </Routes>

      <AnimCursor />
      {/* Dark Light Button  */}
      <div className="dark-light-main">
        <input
          id="toggle"
          className="toggle"
          type="checkbox"
          aria-checked={isDarkMode}
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
      </div>
      {/* Bottom Top Button */}
      <button
        className="bottom-top-button"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <img src={faArrowUp} alt="" style={{ fontSize: "22px" }} />
      </button>
    </div>
  );
}

export default App;
