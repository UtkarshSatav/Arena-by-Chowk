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
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeIn fullWidth direction="none">
        <Ticker />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <Concept />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <Experience />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <Financials />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <WhyArenaa />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <InvestSection />
      </FadeIn>
      <FadeIn fullWidth delay={0.1}>
        <AboutBrand />
      </FadeIn>
      <Footer />
    </main>
  );
}
