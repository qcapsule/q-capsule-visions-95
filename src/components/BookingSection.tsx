import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Video, MapPin, Clock } from 'lucide-react';

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const meetingTypes = [
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "30-minute online meeting to discuss your project",
      duration: "30 min",
      type: "Online"
    },
    {
      icon: MapPin,
      title: "Showroom Visit",
      description: "Experience our demo capsule at our Qatar facility",
      duration: "60 min",
      type: "In-Person"
    },
    {
      icon: Calendar,
      title: "Project Planning",
      description: "Detailed planning session with our design team",
      duration: "90 min",
      type: "Hybrid"
    }
  ];

  return (
    <section id="booking" className="relative overflow-hidden py-32 bg-black">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              GET STARTED
            </span>
          </h2>
          
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            Ready to bring your vision to life? Schedule a consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Meeting Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {meetingTypes.map((meeting, index) => (
              <motion.div
                key={meeting.title}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <meeting.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {meeting.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-sm text-white/60">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{meeting.duration}</span>
                        </div>
                        <span className="px-2 py-1 bg-white/10 text-white rounded-full text-xs border border-white/20">
                          {meeting.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-white/60 font-light">
                      {meeting.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Now</h3>
              <p className="text-white/60 text-sm font-light">
                Select a time that works for you
              </p>
            </div>

            {/* Calendly Widget Placeholder */}
            <div className="w-full h-[500px] bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
              <div className="text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary mx-auto" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Calendly Integration</h4>
                  <p className="text-white/60 text-sm mb-4 font-light">
                    Connect your Calendly account to enable booking
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm mb-3 font-light">
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
                  hello@qcapsules.qa
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
