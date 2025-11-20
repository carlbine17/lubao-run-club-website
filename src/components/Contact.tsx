import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Lubao, Pampanga, Philippines",
      link: null
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "lubaorunningclub@gmail.com",
      link: "mailto:lubaorunningclub@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact",
      content: "Message us on Facebook",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/LRCLubaoRunClub",
      description: "Follow our daily updates and event announcements"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
        </svg>
      ),
      name: "Strava",
      url: "https://www.strava.com/clubs/lrc",
      description: "Join our Strava club and track your runs with us"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "#",
      description: "See photos from our runs and events"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your running journey with us? We'd love to hear from you! 
            Connect with us through any of these channels.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Follow Us on Social Media
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                        {social.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {social.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(social.url, '_blank')}
                        className="hover:bg-accent hover:text-accent-foreground"
                      >
                        Visit {social.name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
