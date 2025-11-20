import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lubao Running Club</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Where every step counts and every runner matters. 
              Join us in our mission to promote health, fitness, and community through running.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Mission & Vision', 'Events', 'Members', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item === 'Mission & Vision' ? 'mission' : item.toLowerCase();
                      const element = document.getElementById(id);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <p className="text-primary-foreground/80">
                Lubao, Pampanga, Philippines
              </p>
              <p className="text-primary-foreground/80">
                Est. 2025
              </p>
              <div className="pt-4">
                <p className="text-sm text-primary-foreground/60">
                  Follow us on Facebook and Strava for updates!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-center md:text-left">
              © {currentYear} Lubao Running Club. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Website crafted with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>by</span>
              <a
                href="https://carlbine-folio-hub.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors font-semibold"
              >
                Carlbine Portfolio Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
