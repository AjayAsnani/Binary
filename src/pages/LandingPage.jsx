import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import TaskPage from "./TaskPage";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Why />
      <Benefits />
      <CTA />
      <Testimonials />
      <TaskPage />
    </div>
  );
}

export default LandingPage;
