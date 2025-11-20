import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MemberList = () => {
  const members = [
    { name: "Juan Dela Cruz", role: "President", specialty: "Marathon Runner" },
    { name: "Maria Santos", role: "Vice President", specialty: "Trail Running" },
    { name: "Jose Reyes", role: "Secretary", specialty: "5K Specialist" },
    { name: "Ana Garcia", role: "Treasurer", specialty: "Half Marathon" },
    { name: "Pedro Martinez", role: "Training Coordinator", specialty: "Sprint Coach" },
    { name: "Lisa Fernandez", role: "Events Manager", specialty: "Ultra Marathon" },
    { name: "Carlos Villanueva", role: "Social Media Manager", specialty: "10K Runner" },
    { name: "Sofia Rodriguez", role: "Member", specialty: "Beginner Runner" },
    { name: "Miguel Torres", role: "Member", specialty: "Cross Country" },
    { name: "Elena Ramos", role: "Member", specialty: "Long Distance" },
    { name: "Roberto Cruz", role: "Member", specialty: "Track Runner" },
    { name: "Carmen Lopez", role: "Member", specialty: "Fun Runner" },
  ];

  return (
    <section id="member-list" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Members
            </h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the amazing runners who make LRC a vibrant and supportive community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberList;
