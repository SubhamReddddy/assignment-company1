import React from "react";
import Header from "./components/Header";
import SimpleSlider from "./components/SimpleSlider";
import Slick from "./components/Slick";
import Slick3 from "./components/Slick3";
import AssuranceSection from "./components/AssuranceSection";
import BespokeDesignSection from "./components/BespokeDesignSection";
import TestimonialSection from "./components/TestimonialSection";
import ConnectWithUs from "./components/ConnectWithUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <SimpleSlider />
      <Slick />
      <Slick3 />
      <AssuranceSection />
      <BespokeDesignSection />
      <TestimonialSection />
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default App;
