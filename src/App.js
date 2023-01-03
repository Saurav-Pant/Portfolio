import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Project from "./Routes/Project/Project";
import Skills from "./Routes/Skills/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
