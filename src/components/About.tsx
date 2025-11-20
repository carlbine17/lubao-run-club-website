import { Users, Heart, Trophy, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Community",
      description: "A supportive family of runners who encourage and motivate each other every step of the way."
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Passion",
      description: "United by our love for running and commitment to healthy, active lifestyles."
    },
    {
      icon: <Trophy className="w-10 h-10 text-accent" />,
      title: "Excellence",
      description: "Striving for personal bests while celebrating every achievement, big or small."
    },
    {
      icon: <MapPin className="w-10 h-10 text-accent" />,
      title: "Local Roots",
      description: "Proudly representing Lubao, Pampanga, and promoting fitness in our community."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About LRC
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2025, Lubao Running Club brings together runners of all levels 
            to share their passion for fitness, friendship, and personal growth. 
            We're more than just a running club—we're a family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
