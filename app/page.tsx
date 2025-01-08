import Billing from "@/components/Billing";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Productivity from "@/components/Productivity";
import Testimonials from "@/components/Testimonials";
import Tiles from "@/components/Tiles";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Tiles />
      <Companies />
      <Growth />
      <Productivity />
      <Integration />
      <Testimonials />
      <Billing />
      <Footer />
    </main>
  );
}
