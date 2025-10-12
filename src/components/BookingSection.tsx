import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Video, MapPin, Clock, Sparkles } from "lucide-react";

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const meetingTypes = [
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "30-minute online meeting to discuss your project",
      duration: "30 min",
      type: "Online",
    },
    {
      icon: MapPin,
      title: "Showroom Visit",
      description: "Experience our demo capsule at our Qatar facility",
      duration: "60 min",
      type: "In-Person",
    },
    {
      icon: Calendar,
      title: "Project Planning",
      description: "Detailed planning session with our design team",
      duration: "90 min",
      type: "Hybrid",
    },
  ];

  return (
    <section id="booking" className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl" ref={ref}>
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
            <span className="text-foreground">Schedule Your Meeting</span>
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Meeting Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Choose Your Meeting Type
            </h3>

            {meetingTypes.map((meeting, index) => (
              <motion.div
                key={meeting.title}
                className="glass-card p-6 hover-lift group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300">
                    <meeting.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold group-hover:text-gradient transition-all duration-300">
                        {meeting.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{meeting.duration}</span>
                        </div>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {meeting.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      {meeting.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="glass-card p-6 bg-gradient-primary/5 border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Schedule Now</h3>
              <p className="text-muted-foreground text-sm">
                Select a time that works for you
              </p>
            </div>

            {/* Calendly Widget Placeholder */}
            <div className="w-full h-[500px] bg-gradient-secondary rounded-lg flex items-center justify-center border border-border/50">
              <div className="text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary mx-auto" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Calendly Integration
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect your Calendly account to enable booking
                  </p>
                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    Replace this placeholder with your actual Calendly embed
                    code:
                    <br />
                    <code className="text-primary">
                      &lt;iframe src="https://calendly.com/your-account" ...&gt;
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-border/50 text-center">
              <p className="text-muted-foreground text-sm mb-3">
                Prefer to talk directly?
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+97412345678"
                  className="text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  +974 1234 5678
                </a>
                <a
                  href="mailto:hello@qcapsules.qa"
                  className="text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  ✉️ hello@qcapsules.qa
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
