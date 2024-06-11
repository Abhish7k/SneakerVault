import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newest from "@/components/Newest";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Newest />
      <Footer />
    </main>
  );
}
