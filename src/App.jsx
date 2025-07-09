import React from "react";
import bgVideo from "./assets/earthsurface.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
function App() {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="Video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      <Services />
    </div>
  );
}

export default App;
