import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductList from "@/components/ProductList";
import Blog from "@/components/Blog";
import Compatibility from "@/components/Compatibility";
import Service from "@/components/Service";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactPinned from "@/components/ContactPinned";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductList showViewAll />
      <Blog showViewAll />
      <Service />
      <Reviews />
      <Compatibility />
      <FAQ />
      <Footer />
      <ContactPinned />
    </main>
  );
}
