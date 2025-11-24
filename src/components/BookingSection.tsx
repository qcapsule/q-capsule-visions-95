import { forwardRef, useRef, useEffect } from "react";
import {
  Calendar,
  Video,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

export const BookingSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const meetingTypes = [
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "30-minute online meeting to discuss your project",
      duration: "30 min",
      type: "Online",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: MapPin,
      title: "Showroom Visit",
      description: "Experience our demo capsule at our Qatar facility",
      duration: "60 min",
      type: "In-Person",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Calendar,
      title: "Project Planning",
      description: "Detailed planning session with our design team",
      duration: "90 min",
      type: "Hybrid",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <section ref={ref} id="booking" className="relative overflow-hidden py-32">
      {/* Light Background Overlay */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-sm"></div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -50, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div
        className="container mx-auto px-6 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">Schedule Consultation</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Book Your Consultation
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to bring your vision to life? Schedule a personalized
            consultation with our experts to explore possibilities and get
            started.
          </motion.p>
        </motion.div>

        {/* Meeting Types - Side by Side with Schedule Form */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Meeting Types */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {meetingTypes.map((meeting, index) => (
                <motion.div
                  key={meeting.title}
                  className="group relative h-full"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    z: 50,
                  }}
                >
                  <div className="glass-card p-6 relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    {/* Dynamic background effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${meeting.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>

                    {/* Golden Divider */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        className="w-14 h-14 mb-4 mx-auto bg-card/50 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <meeting.icon
                          className={`h-7 w-7 ${meeting.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                        />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                        {meeting.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 mb-3 text-sm">
                        {meeting.description}
                      </p>

                      {/* Duration & Type */}
                      <div className="flex items-center justify-center gap-3 text-xs">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{meeting.duration}</span>
                        </div>
                        <div className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                          {meeting.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Schedule Form/Card */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass-card p-8 lg:p-12 relative overflow-hidden border border-border/50 transition-all duration-500"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Golden Divider */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    Schedule Now
                  </h3>
                  <p className="text-muted-foreground">
                    Select a time that works for you
                  </p>
                </div>

                {/* Calendly Widget Placeholder */}
                <div className="w-full h-[500px] bg-card/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border/30 mb-8">
                  <div className="text-center space-y-4 p-8">
                    <Calendar className="h-16 w-16 text-primary/60 mx-auto" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        Calendly Integration
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Connect your Calendly account to enable booking
                      </p>
                      <div className="text-xs text-muted-foreground bg-card/50 p-3 rounded-lg">
                        Replace this placeholder with your actual Calendly embed
                        code
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative Contact */}
                <div className="pt-6 border-t border-border/30">
                  <p className="text-muted-foreground text-center text-sm mb-4">
                    Prefer to talk directly?
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="tel:+97455842290"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full px-6 py-3 font-medium flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="h-4 w-4" />
                      +97455842290
                    </motion.a>
                    <motion.a
                      href="mailto:info@Qcapsules.com"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-foreground transition-all duration-300 rounded-full px-6 py-3 font-medium flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-4 w-4" />
                      info@Qcapsules.com
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

BookingSection.displayName = "BookingSection";
