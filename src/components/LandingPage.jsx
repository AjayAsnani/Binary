import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import Benefits from "./Benefits";
import CTA from "./CTA";
import Testimonials from "./Testimonials";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Why />
      <Benefits />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
