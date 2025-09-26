import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black/95 cyber-grid backdrop-blur-xl border-t border-primary-glow/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow animate-neural-glow">
                <span className="text-primary-foreground font-bold text-xl font-mono">Q</span>
              </div>
              <span className="text-2xl font-bold text-gradient font-mono tracking-wider">CAPSULES</span>
            </div>
            <p className="text-muted-foreground leading-relaxed font-mono">
              Revolutionizing modular living with sustainable, innovative capsule homes made in Qatar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 holographic-card neural-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 holographic-card neural-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 holographic-card neural-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 holographic-card neural-border rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient font-mono tracking-wider">QUICK LINKS</h3>
            <div className="space-y-3">
              {['Home', 'Vision', 'Capsules', 'Use Cases', 'About', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-muted-foreground hover:text-primary transition-colors font-mono">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient font-mono tracking-wider">SERVICES</h3>
            <div className="space-y-3">
              {['Custom Design', 'Installation', 'Maintenance', 'Consultation', 'Project Management'].map((service) => (
                <span key={service} className="block text-muted-foreground font-mono">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gradient font-mono tracking-wider">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground font-mono">Doha, Qatar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground font-mono">+974 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground font-mono">hello@qcapsules.qa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-glow/20 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-mono">
            © 2024 Q CAPSULES. ALL RIGHTS RESERVED. MADE IN QATAR
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-mono">PRIVACY POLICY</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors font-mono">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};