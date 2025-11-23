import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import qcapsuleLogo from "@/assets/qcapsule-logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Vision", href: "#vision" },
    { label: "Capsules", href: "#capsule-collection" },
    { label: "Brochure", href: "#brochure" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#booking" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const elementTop = (element as HTMLElement).offsetTop;
      window.scrollTo({ top: elementTop, behavior: "auto" });
      setTimeout(() => {
        window.scrollTo({ top: elementTop, behavior: "smooth" });
      }, 10);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <img
                  src={qcapsuleLogo}
                  alt="QCapsule Logo"
                  className="h-16 w-auto py-2"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center">
                {navItems.map((item, index) => (
                  <div key={item.label} className="flex items-center">
                    <motion.button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 px-4 py-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                    {index < navItems.length - 1 && (
                      <div className="w-px h-6 bg-gradient-to-b from-transparent via-yellow-600 to-transparent mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-foreground backdrop-blur-md border border-border text-background hover:bg-foreground/90 transition-all duration-300 rounded-full px-6 py-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => scrollToSection("#booking")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Meeting
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Dark Golden Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white backdrop-blur-md border-t border-yellow-200/30"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col items-center">
                  {navItems.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center w-full"
                    >
                      <motion.button
                        onClick={() => scrollToSection(item.href)}
                        className="text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 w-full"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.button>
                      {index < navItems.length - 1 && (
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent my-2"></div>
                      )}
                    </div>
                  ))}

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent my-4"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="bg-foreground backdrop-blur-md border border-border text-background hover:bg-foreground/90 transition-all duration-300 w-full py-3 rounded-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      onClick={() => scrollToSection("#booking")}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Book Meeting
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
