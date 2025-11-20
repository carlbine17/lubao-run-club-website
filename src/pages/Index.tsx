import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Events from "@/components/Events";
import Members from "@/components/Members";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Events />
        <Members />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
