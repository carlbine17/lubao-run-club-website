import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lrcCover from "@/assets/lrccover.png";
import lrcLogo from "@/assets/LRC.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lrcCover} 
          alt="Lubao Running Club - Golden hour running scene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Floating Logo */}
        <div className="mb-8 flex justify-center animate-float">
          <img 
            src={lrcLogo} 
            alt="Lubao Running Club Logo" 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl border-4 border-primary-foreground/20"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-slide-up drop-shadow-2xl">
          Lubao Running Club
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 mb-4 max-w-3xl mx-auto font-medium animate-slide-up">
          Where every step counts and every runner matters
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto animate-slide-up">
          Join our vibrant community of passionate runners in Lubao, Pampanga. 
          Whether you're a beginner or seasoned athlete, there's a place for you here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Join the Club
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 shadow-lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
