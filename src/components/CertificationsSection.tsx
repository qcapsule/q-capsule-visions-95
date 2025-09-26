import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Thermometer, Zap, Leaf, Award, CheckCircle, Star, Globe } from 'lucide-react';
import certificationsImage from '@/assets/certifications.png';

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      description: "International standard for quality management systems ensuring consistent quality",
      color: "from-blue-500 to-blue-600",
      verified: true
    },
    {
      icon: Leaf,
      title: "LEED Platinum",
      subtitle: "Green Building",
      description: "Leadership in Energy and Environmental Design certification for sustainable building",
      color: "from-green-500 to-green-600",
      verified: true
    },
    {
      icon: Zap,
      title: "Energy Star",
      subtitle: "Energy Efficiency",
      description: "Government-backed symbol for energy efficiency and environmental protection",
      color: "from-yellow-500 to-yellow-600",
      verified: true
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      subtitle: "HVAC Excellence",
      description: "Advanced climate control systems maintaining optimal temperature and humidity",
      color: "from-cyan-500 to-cyan-600",
      verified: true
    },
    {
      icon: Shield,
      title: "Fire Safety",
      subtitle: "UL Listed",
      description: "Underwriters Laboratories certification for fire safety and electrical systems",
      color: "from-red-500 to-red-600",
      verified: true
    },
    {
      icon: Globe,
      title: "Qatar Standards",
      subtitle: "QS Compliance",
      description: "Full compliance with Qatar National Standards for construction and safety",
      color: "from-purple-500 to-purple-600",
      verified: true
    }
  ];

  const features = [
    "Advanced Insulation Technology",
    "Smart Temperature Control",
    "Renewable Energy Integration",
    "Sustainable Materials",
    "Fire Resistant Construction", 
    "Structural Engineering Excellence",
    "Quality Assurance Testing",
    "Environmental Compliance"
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quality & Standards
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Certifications & Standards</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications 
            and rigorous compliance with international standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Certifications Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card p-6 hover-lift group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500`}>
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    {cert.verified && (
                      <div className="flex items-center space-x-1 text-primary">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1 group-hover:text-gradient transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {cert.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 golden-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Image & Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass-card p-8 text-center">
              <img 
                src={certificationsImage} 
                alt="Q Capsules Certifications" 
                className="w-full max-w-sm mx-auto mb-6 rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-gradient mb-3">
                Certified Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every Q Capsule meets or exceeds the most stringent international standards 
                for safety, quality, and environmental responsibility.
              </p>
            </div>

            {/* Key Features List */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 text-gradient">
                Quality Features
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{feature}</span>
                    <Star className="h-3 w-3 text-primary ml-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-card p-8 text-center bg-gradient-primary/5 border-primary/20">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gradient mb-3">Industry Recognition</h3>
            <p className="text-muted-foreground">
              Recognized by leading industry bodies for innovation and excellence in modular construction.
            </p>
          </div>

          <div className="glass-card p-8 text-center bg-gradient-accent/5 border-accent/20">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gradient mb-3">Safety First</h3>
            <p className="text-muted-foreground">
              Comprehensive safety certifications ensuring the highest standards of structural integrity and fire safety.
            </p>
          </div>

          <div className="glass-card p-8 text-center bg-gradient-secondary/5 border-border/50">
            <Leaf className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gradient mb-3">Sustainability</h3>
            <p className="text-muted-foreground">
              Environmental certifications validating our commitment to sustainable and eco-friendly construction practices.
            </p>
          </div>
        </motion.div>

        {/* Verification Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-gradient">
                Verified & Trusted
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              All certifications are independently verified and regularly audited to ensure 
              continued compliance with evolving industry standards. Our commitment to quality 
              is not just a promise—it's proven.
            </p>
            
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
              View Certification Documents
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};