import { forwardRef, useRef, useEffect, useState } from "react";
import {
  Calendar,
  Video,
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// Instagram profile data
const INSTAGRAM_PROFILE = {
  username: "qcapsules_qa",
  profilePic: "https://instagram.fdoh6-1.fna.fbcdn.net/v/t51.2885-19/538685811_17845308747556497_1843869026349193709_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fdoh6-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QFcJiLJfW50RXqLFr8yMel9r3gbW_UP3C3tdZa7aiOxjWfTsRl775ptgVi4K99yeahRnDlworqvQSFjkdX7CLup&_nc_ohc=EOQFOvFnPKUQ7kNvwGrHkAB&_nc_gid=ixaCoI1jwiPpV2kTq8XvnA&edm=AHzjunoBAAAA&ccb=7-5&oh=00_AfvNewQ5pWq2yAEECznSRwEhHcRTFqCAd1pgNGMDBVRXrw&oe=698450A7&_nc_sid=ba8368",
  bio: "Luxury Living. Limitless Locations.\nMade in Qatar 🇶🇦",
  followers: 2,
  url: "https://www.instagram.com/qcapsules_qa/?utm_source=ig_web_button_share_sheet",
};

export const BookingSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [selectedMeetingType, setSelectedMeetingType] = useState<string | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
          to_email: "info@qcapsules.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          meeting_type: selectedMeetingType,
          message: formData.message,
          subject: `Consultation Request: ${selectedMeetingType}`,
        },
        publicKey,
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
      title: "Pre Order",
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
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Contact
            </span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Us
            </span>
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
                  <div
                    className={`glass-card p-6 relative overflow-hidden border transition-all duration-500 h-full flex flex-col rounded-2xl ${
                      selectedMeetingType === meeting.title
                        ? "border-primary/50 bg-primary/10"
                        : "border-border/50 group-hover:border-primary/30"
                    }`}
                  >
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
              className="glass-card p-8 lg:p-12 relative overflow-hidden border border-border/50 transition-all duration-500 rounded-2xl"
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
                    <p className="text-sm text-muted-foreground mb-1">
                      Selected Consultation Type:
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {selectedMeetingType}
                    </p>
                  </motion.div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
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
                      There was an error sending your message. Please try again
                      or contact us directly.
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
                      href="tel:+97466449963"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full px-6 py-3 font-medium flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="h-4 w-4" />
                      +974 6644 9963
                    </motion.a>
                    <motion.a
                      href="https://wa.me/97466449963"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white transition-all duration-300 rounded-full px-6 py-3 font-medium flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
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

                {/* Instagram Profile Embed */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Follow Us
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Stay updated with our latest projects and designs
                    </p>
                  </div>
                  <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                    {/* Background gradient */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(180, 130, 70, 0.15) 0%, rgba(200, 150, 90, 0.1) 50%, rgba(160, 110, 60, 0.08) 100%)",
                        boxShadow:
                          "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 1px 0 rgba(220, 170, 110, 0.2)",
                      }}
                    ></div>

                    {/* Shine Effect */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)",
                        mixBlendMode: "overlay",
                      }}
                    ></div>

                    {/* Instagram Profile */}
                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                          {INSTAGRAM_PROFILE.profilePic ? (
                            <img
                              src={INSTAGRAM_PROFILE.profilePic}
                              alt={`${INSTAGRAM_PROFILE.username} profile`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to icon if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center"><svg class="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>';
                                }
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                              <Instagram className="h-8 w-8 text-primary" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-bold text-foreground mb-1">
                            @{INSTAGRAM_PROFILE.username}
                          </h5>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              <strong className="text-foreground">{INSTAGRAM_PROFILE.followers}</strong>{" "}
                              {INSTAGRAM_PROFILE.followers === 1 ? "follower" : "followers"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                        {INSTAGRAM_PROFILE.bio}
                      </p>
                      <motion.a
                        href={INSTAGRAM_PROFILE.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:from-[#933AB4] hover:via-[#FD2D2D] hover:to-[#FCC055] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Follow on Instagram</span>
                      </motion.a>
                    </div>
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
