import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Doctor from "./components/Doctor.jsx";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import Treatment from "./components/Treatment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/treatment" element={<Treatment />} />
      </Routes>
    </Router>
  );
}

export default App;
