import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import AboutBrand from "./components/AboutBrand";
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
      <Footer />
    </main>
  );
}
