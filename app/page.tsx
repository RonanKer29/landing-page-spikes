import Companies from "@/components/Companies";
import Growth from "@/components/Growth";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Productivity from "@/components/Productivity";
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
    </main>
  );
}
