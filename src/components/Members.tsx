import { UserPlus, Award, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Members = () => {
  const stats = [
    { icon: <UserPlus className="w-8 h-8" />, value: "50+", label: "Active Members" },
    { icon: <Award className="w-8 h-8" />, value: "20+", label: "Races Completed" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "1000+", label: "Kilometers Run" },
    { icon: <Sparkles className="w-8 h-8" />, value: "100%", label: "Positive Vibes" },
  ];

  const benefits = [
    "Free access to all club training sessions",
    "Personalized training guidance from experienced runners",
    "Exclusive club merchandise and running gear discounts",
    "Priority registration for special events and races",
    "Connect with fellow runners on our Strava club",
    "Social activities and post-run gatherings",
    "Beginner-friendly environment with mentorship program",
    "Track your progress with our supportive community"
  ];

  return (
    <section id="members" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Our Running Family
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of a community that celebrates every mile, supports every goal, 
            and makes running more enjoyable together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border text-center hover:border-accent transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-3 text-accent">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Member Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary-foreground text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Become a Member Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Members;
