import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Compatibility from "@/components/Compatibility";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Compatibility />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
      <ContactPinned />
    </main>
  );
}
