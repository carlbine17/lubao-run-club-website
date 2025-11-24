import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import athleticsImage from "@/assets/athletics.jpg";

const Athletics = () => {
  const athletes = [
    { name: "Mark Johnson", category: "100m Sprint", isWinner: true, achievement: "1st Place Regional" },
    { name: "Sarah Chen", category: "Marathon", isWinner: true, achievement: "Gold Medal" },
    { name: "David Torres", category: "400m Relay", isWinner: false },
    { name: "Lisa Martinez", category: "Long Jump", isWinner: true, achievement: "Provincial Champion" },
    { name: "Kevin Santos", category: "5000m Run", isWinner: false },
    { name: "Angela Reyes", category: "High Jump", isWinner: false },
    { name: "Michael Cruz", category: "200m Sprint", isWinner: true, achievement: "Bronze Medal" },
    { name: "Emma Rodriguez", category: "800m Run", isWinner: false },
    { name: "Ryan Garcia", category: "Triple Jump", isWinner: false },
    { name: "Nicole Fernandez", category: "1500m Run", isWinner: true, achievement: "Silver Medal" },
    { name: "Joshua Villanueva", category: "4x100m Relay", isWinner: false },
    { name: "Sophia Lopez", category: "3000m Steeplechase", isWinner: false },
    { name: "Daniel Ramos", category: "Javelin Throw", isWinner: true, achievement: "District Champion" },
    { name: "Olivia Mercado", category: "Shot Put", isWinner: false },
    { name: "Carlos Mendoza", category: "10000m Run", isWinner: false },
  ];

  const winners = athletes.filter(athlete => athlete.isWinner);
  const allAthletes = athletes;

  return (
    <section id="athletics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-16 shadow-lg">
          <img 
            src={athleticsImage} 
            alt="LRC Athletic Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end justify-center pb-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                LRC Athletic Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Excellence in Track and Field
              </p>
            </div>
          </div>
        </div>

        {/* Winners Highlight Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-10 h-10 text-accent" />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Champions & Medalists
              </h3>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {winners.map((athlete, index) => (
              <Card 
                key={index} 
                className="border-accent bg-accent/5 hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {athlete.name}
                      </h4>
                      <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">
                        {athlete.category}
                      </Badge>
                      <p className="text-sm text-accent font-medium">
                        🏆 {athlete.achievement}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Athletes Section */}
        <div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-10 h-10 text-accent" />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                All Athletes
              </h3>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allAthletes.map((athlete, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <Medal className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {athlete.name}
                      </h4>
                      <Badge variant="secondary" className="mb-2">
                        {athlete.category}
                      </Badge>
                      {athlete.isWinner && (
                        <p className="text-xs text-accent">
                          ✨ Champion
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Athletics;
