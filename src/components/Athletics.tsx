import { Trophy, Medal, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import athleticsImage from "@/assets/athletics.jpg";

interface Athlete {
  name: string;
  category: string;
  achievement: string;
}

const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1I870zYlEDWWzuc6CDzYRyFdFoXvHbBTioF43lzBMIho/export?format=csv&gid=1658907765";

const parseCSV = (csv: string): Athlete[] => {
  const lines = csv.split('\n');
  const athletes: Athlete[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV handling quoted fields
    const matches = line.match(/("([^"]*)"|[^,]*)(,|$)/g);
    if (!matches) continue;
    
    const values = matches.map(m => m.replace(/^"|"$|,$/g, '').trim());
    const [name, category, achievement] = values;
    
    if (name && category) {
      athletes.push({
        name,
        category,
        achievement: achievement || ''
      });
    }
  }
  
  return athletes;
};

const fetchAthletes = async (): Promise<Athlete[]> => {
  const response = await fetch(SPREADSHEET_URL);
  if (!response.ok) throw new Error('Failed to fetch athletes');
  const csv = await response.text();
  return parseCSV(csv);
};

const Athletics = () => {
  const { data: athletes = [], isLoading, error } = useQuery({
    queryKey: ['athletes'],
    queryFn: fetchAthletes,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

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

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : error ? (
            <div className="text-center py-12 text-muted-foreground">
              Failed to load athletes. Please try again later.
            </div>
          ) : (
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
                        {athlete.achievement && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                            {athlete.achievement}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Athletics;
