import React from "react";
import bgVideo from "./assets/earthsurface.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
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
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
