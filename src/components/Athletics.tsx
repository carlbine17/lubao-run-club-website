import { Trophy, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import athleticsImage from "@/assets/athletics.jpg";

const Athletics = () => {
  const athletes = [
    { 
      name: "Jaen Laxamana", 
      category: "800m, 1500m", 
      achievement: "Zonal Meet: 800m-2nd, 1500m-1st | Inter Zonal Meet: 800m-4th, 1500m-5th" 
    },
    { 
      name: "Reiven Jiro L. Yanga", 
      category: "3000m, 5000m, 1500m, 10,000m", 
      achievement: "Elementary 800m-Silver | Grade 7: 1500m-Silver, 10,000m-Bronze | Grade 8: 1500m-Bronze, 3000m-Bronze, 5000m-Silver | Grade 9: 3000m-Gold, 5000m-Gold & Silver" 
    },
    { 
      name: "Michael Angelo Sunga", 
      category: "5000m, 4x100m, 4x400m", 
      achievement: "Zonal: 5K-Silver, 4x100-Silver, 4x400-Gold, Triple Jump-Bronze | Inter Zonal: 5K-Bronze" 
    },
    { 
      name: "Lance Jorel A. Ramos", 
      category: "800m, 1500m, 4x400m", 
      achievement: "Zonal Meet: 800m-Gold, 1500m-Silver, 4x400m-Gold | Inter Zonal Meet: 800m-3rd, 1500m-6th, 4x400m-4th" 
    },
    { 
      name: "Christian Lery Mauricio", 
      category: "400m, 400m Hurdles", 
      achievement: "Zonal Meet: 400m-Gold, 400m Hurdles-Gold | Inter Zonal Meet: 400m-Silver, 400m Hurdles-Bronze" 
    },
    { 
      name: "Frince Eryzole V. Cordova", 
      category: "400m", 
      achievement: "Gold, Silver" 
    },
  ];

  return (
    <section id="athletics" className="relative bg-background">
      {/* Background Image with Overlay - Extended Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={athleticsImage} 
            alt="LRC Athletic Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-32 md:py-48 lg:py-72">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
              LRC Athletic Team
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Excellence in Track and Field
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        {/* All Athletes Section */}
        <div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-10 h-10 text-accent" />
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                LRC Athletes
              </h3>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {athletes.map((athlete, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                      <Medal className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {athlete.name}
                      </h4>
                      <Badge variant="secondary" className="mb-2">
                        {athlete.category}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                        {athlete.achievement}
                      </p>
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
