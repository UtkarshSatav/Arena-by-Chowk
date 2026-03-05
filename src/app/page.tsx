import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Concept from "./components/Concept";
import Experience from "./components/Experience";
import Financials from "./components/Financials";
import WhyArenaa from "./components/WhyArenaa";
import InvestSection from "./components/InvestSection";
import AboutBrand from "./components/AboutBrand";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Concept />
      <Experience />
      <Financials />
      <WhyArenaa />
      <InvestSection />
      <AboutBrand />
      <Footer />
    </main>
  );
}
