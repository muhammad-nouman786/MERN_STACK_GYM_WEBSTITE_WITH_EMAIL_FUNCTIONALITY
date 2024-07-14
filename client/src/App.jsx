import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import BMICalculator from "./components/BMICalculator";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import WorkoutSessions from "./components/WorkoutSessions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
