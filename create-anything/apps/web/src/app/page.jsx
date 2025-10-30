import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
