import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold text-white">Capsules</span>
            </div>
            <p className="text-white/60 leading-relaxed font-light">
              Revolutionizing modular living with sustainable, innovative capsule homes made in Qatar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'Capsules', 'Use Cases', 'About', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/60 hover:text-white transition-colors font-light">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <div className="space-y-3">
              {['Custom Design', 'Installation', 'Maintenance', 'Consultation', 'Project Management'].map((service) => (
                <span key={service} className="block text-white/60 font-light">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white/60 font-light">Doha, Qatar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-white/60 font-light">+974 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-white/60 font-light">hello@qcapsules.qa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-light">
            © 2024 Q Capsules. All rights reserved. Made in Qatar
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
