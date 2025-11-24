import { forwardRef, useRef, useEffect, useState } from "react";
import {
  Calendar,
  Video,
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export const BookingSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [selectedMeetingType, setSelectedMeetingType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMeetingType) {
      alert("Please select a consultation type");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_zk87z77";
      const templateId = "template_htkymrf";
      const publicKey = "orjVGAJ4wDLHYFHZm";

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "info@qcapsule.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          meeting_type: selectedMeetingType,
          message: formData.message,
          subject: `Consultation Request: ${selectedMeetingType}`,
        },
        publicKey
      );

      console.log("Email sent successfully:", result);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedMeetingType(null);
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error: any) {
      console.error("Error sending email:", error);
      
      // Provide more detailed error message
      let errorMessage = "Failed to send message. Please try again.";
      if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      alert(errorMessage);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section 
      ref={ref} 
      id="booking" 
      className="relative overflow-hidden py-32"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header Pattern */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Contact
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Us
            </span>
            <span className="text-2xl text-foreground">✦</span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-4xl mx-auto">
            Ready to bring your vision to life? Schedule a personalized
            consultation with our experts to explore possibilities and get
            started.
          </p>
        </motion.div>

        {/* Meeting Types - Side by Side with Schedule Form */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Side - Meeting Types */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {meetingTypes.map((meeting, index) => (
                <motion.button
                  key={meeting.title}
                  type="button"
                  onClick={() => setSelectedMeetingType(meeting.title)}
                  className="group relative h-full w-full text-left"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    z: 50,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`glass-card p-6 relative overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                    selectedMeetingType === meeting.title
                      ? "border-primary/50 bg-primary/10"
                      : "border-border/50 group-hover:border-primary/30"
                  }`}>
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
                </motion.button>
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
                    Contact Us
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you
                  </p>
                </div>

                {/* Selected Meeting Type Display */}
                {selectedMeetingType && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg"
                  >
                    <p className="text-sm text-muted-foreground mb-1">Selected Consultation Type:</p>
                    <p className="text-lg font-semibold text-primary">{selectedMeetingType}</p>
                  </motion.div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 backdrop-blur-sm border-border/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-background/50 backdrop-blur-sm border-border/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 backdrop-blur-sm border-border/50"
                      placeholder="+974 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 backdrop-blur-sm border-border/50 min-h-[120px]"
                      placeholder="Tell us about your project or any questions you have..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 text-sm"
                    >
                      There was an error sending your message. Please try again or contact us directly.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedMeetingType}
                    className="w-full bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Commented out Calendly Widget */}
                {/* 
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
                */}

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
