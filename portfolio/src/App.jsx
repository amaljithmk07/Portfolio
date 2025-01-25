import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Home/Loader";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Adjusting the duration to be slightly longer for smoother scrolling
      easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing curve for a more natural feel
      smooth: true, // Enable smooth scroll
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
