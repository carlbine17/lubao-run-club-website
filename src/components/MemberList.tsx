import { Users, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jmLingadPhoto from "@/assets/jm-lingad.jpg";

const MemberList = () => {
  const members = [
    { 
      name: "Ron Macatuno", 
      role: "Founder", 
      specialty: "Marathon Runner",
      photo: null,
      quote: null
    },
    { 
      name: "JM Lingad", 
      role: "Co-Founder", 
      specialty: "Runner",
      photo: jmLingadPhoto,
      quote: "A runner is not defined by speed, but by the determination to keep going."
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:ring-2 group-hover:ring-accent transition-all">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-accent" />
                    )}
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
                    {member.quote && (
                      <p className="text-sm italic text-muted-foreground mt-3 border-l-2 border-accent pl-3 text-left">
                        "{member.quote}"
                      </p>
                    )}
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
