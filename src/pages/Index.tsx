import { useEffect } from "react";
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
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-fade-in");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <Navigation />
      <ScrollNavigation />
      <main>
        <section id="home" className="scroll-fade-in snap-start snap-always min-h-screen">
          <Hero />
        </section>
        <section id="about" className="scroll-fade-in snap-start snap-always min-h-screen">
          <About />
        </section>
        <section id="mission" className="scroll-fade-in snap-start snap-always min-h-screen">
          <MissionVision />
        </section>
        <section id="events" className="scroll-fade-in snap-start snap-always min-h-screen">
          <Events />
        </section>
        <section id="members" className="scroll-fade-in snap-start snap-always min-h-screen">
          <Members />
        </section>
        <section id="member-list" className="scroll-fade-in snap-start snap-always min-h-screen">
          <MemberList />
        </section>
        <section id="contact" className="scroll-fade-in snap-start snap-always">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
