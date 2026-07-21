import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <Pricing/>
      <HowItWorks/>
      <Features/>
      <Contact/>
      <Footer/>
    </main>
  );
}