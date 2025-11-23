import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "mission", label: "Mission & Vision" },
    { id: "events", label: "Events" },
    { id: "members", label: "Members" },
    { id: "member-list", label: "Member List" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    
    // Show label on mobile when clicked
    setClickedSection(id);
    setTimeout(() => setClickedSection(null), 2000);
  };

  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={`Scroll to ${section.label}`}
        >
          <div
            className={cn(
              "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 transition-all duration-300",
              activeSection === section.id
                ? "bg-accent border-accent scale-125"
                : "bg-background border-muted-foreground/40 hover:border-accent hover:scale-110"
            )}
          />
          <span className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-3 py-1 rounded text-sm whitespace-nowrap transition-opacity duration-200 pointer-events-none",
            "md:opacity-0 md:group-hover:opacity-100",
            clickedSection === section.id ? "opacity-100" : "opacity-0 md:opacity-0"
          )}>
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollNavigation;
