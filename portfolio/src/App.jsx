import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Home/Loader";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
