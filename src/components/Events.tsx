import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Sunday Morning Run",
      date: "Every Sunday",
      time: "5:00 AM",
      location: "Lubao Town Plaza",
      distance: "5K - 10K",
      type: "Regular Run",
      participants: "All levels welcome"
    },
    {
      title: "Wednesday Speed Training",
      date: "Every Wednesday",
      time: "5:30 PM",
      location: "Municipal Track",
      distance: "Intervals",
      type: "Training",
      participants: "Intermediate+"
    },
    {
      title: "Saturday Long Run",
      date: "Every Saturday",
      time: "4:30 AM",
      location: "Lubao to Guagua Route",
      distance: "15K - 21K",
      type: "Endurance",
      participants: "Experienced runners"
    }
  ];

  return (
    <section id="events" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for our regular training sessions and special events. 
            Every run is an opportunity to improve, connect, and have fun!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-foreground">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{event.participants}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-foreground">Distance: </span>
                  <span className="text-sm text-muted-foreground">{event.distance}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Follow us on Facebook and Strava for the latest event updates and schedule changes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
