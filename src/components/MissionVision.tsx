import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Purpose
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="border-border hover:border-secondary transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To promote a healthy and active lifestyle through running, fostering a 
                supportive community where runners of all levels can achieve their personal 
                fitness goals together.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Organize regular group runs and training sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Create an inclusive environment for all fitness levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Build lasting friendships through shared athletic pursuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Inspire and motivate members to reach their full potential</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To become the leading running community in Pampanga, inspiring wellness 
                and excellence while representing the spirit and determination of Lubao 
                runners across the Philippines.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Expand our community to reach more aspiring runners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Participate in local and national running events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Promote health awareness in our local community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Develop programs for youth and aspiring athletes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
