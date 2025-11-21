import Navigation from "@/components/Navigation";
import ScrollNavigation from "@/components/ScrollNavigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Events from "@/components/Events";
import Members from "@/components/Members";
import MemberList from "@/components/MemberList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollNavigation />
      <main>
        <div id="home" className="scroll-fade-in">
          <Hero />
        </div>
        <div id="about" className="scroll-fade-in">
          <About />
        </div>
        <div id="mission" className="scroll-fade-in">
          <MissionVision />
        </div>
        <div id="events" className="scroll-fade-in">
          <Events />
        </div>
        <div id="members" className="scroll-fade-in">
          <Members />
        </div>
        <div id="member-list" className="scroll-fade-in">
          <MemberList />
        </div>
        <div id="contact" className="scroll-fade-in">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
