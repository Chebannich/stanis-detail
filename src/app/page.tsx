"use client";

import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider"

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <main>
      <Header />
      <Hero/>
      <Divider/>
      <Pricing onSelectPackage={setSelectedPackage} />
      <Divider/>
      <HowItWorks/>
      <Divider/>
      <Features/>
      <Divider/>
      <Contact selectedPackage={selectedPackage}/>
      <Footer/>
    </main>
  );
}