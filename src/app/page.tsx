import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import AboutBrand from "./components/AboutBrand";
import Concept from "./components/Concept";
import Experience from "./components/Experience";
import Govindam from "./components/Govindam";
import InvestSection from "./components/InvestSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Ticker />
      <div id="about">
        <AboutBrand />
      </div>
      <div id="concept">
        <Concept />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="govindam">
        <Govindam />
      </div>
      <div id="partner">
        <InvestSection />
      </div>
      <Footer />
    </main>
  );
}
