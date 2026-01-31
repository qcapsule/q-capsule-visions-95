import { motion } from "framer-motion";
import {
  // Facebook,
  Instagram,
  // Twitter,
  // Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import qcapsuleLogo from "@/assets/qcapsule-logo4.png";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementTop = (element as HTMLElement).offsetTop;
      window.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Vision", href: "#vision" },
    { label: "Capsules", href: "#capsule-collection" },
    { label: "Brochure", href: "#brochure" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#booking" },
  ];

  const services = [
    "Custom Design",
    "Installation",
    "Maintenance",
    "Consultation",
    "Project Management",
  ];

  // const socialLinks = [
  //   { icon: Instagram, href: "#", label: "Instagram" },
  //   { icon: Facebook, href: "#", label: "Facebook" },
  //   { icon: Twitter, href: "#", label: "Twitter" },
  //   { icon: Linkedin, href: "#", label: "LinkedIn" },
  // ];

  return (
    <footer ref={ref} id="footer" className="relative overflow-hidden py-20 bg-white">

      {/* Golden Divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <img
                src={qcapsuleLogo}
                alt="Q Capsules Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Revolutionizing modular living with sustainable, innovative
              capsule homes made in Qatar.
            </p>
            {/* <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Services
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  className="block text-muted-foreground text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Contact
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-glow transition-colors" />
                <span className="text-muted-foreground text-sm">
                  Doha, Qatar
                </span>
              </motion.div>
              <motion.a
                href="tel:+97466449963"
                className="flex items-start space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-glow transition-colors" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  +974 6644 9963
                </span>
              </motion.a>
              <motion.a
                href="mailto:info@Qcapsules.com"
                className="flex items-start space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-glow transition-colors" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  info@Qcapsules.com
                </span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/qcapsules_qa/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Instagram className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:text-primary-glow transition-colors" />
                <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  @qcapsules_qa
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="relative pt-8 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Golden Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center lg:text-left">
              © 2025 Q Capsules. All rights reserved.{" "}
              <span className="text-primary">Made in Qatar</span>
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
