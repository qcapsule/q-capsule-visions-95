import { forwardRef } from "react";
import {
  Calendar,
  Video,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import islandParadiseImage from "@/assets/island-paradise-capsules.png";

export const BookingSection = forwardRef<HTMLElement>((props, ref) => {
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
    <section
      ref={ref}
      id="booking"
      className="h-[200vh] overflow-hidden sticky top-0"
      style={{
        backgroundImage: `url(${islandParadiseImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background for GSAP */}
      <div
        className="booking-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${islandParadiseImage})`,
        }}
      ></div>

      {/* Subtle Background Overlay */}
      <div className="booking-overlay absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content - Natural flow across 200vh */}
      <div className="booking-content container mx-auto px-6 relative z-10 h-full py-20 space-y-32">
        {/* Top Section - Header */}
        <div className="text-center max-w-6xl mx-auto pt-20">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6">
            Book Your{" "}
            <span className="text-white drop-shadow-lg">Consultation</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Ready to bring your vision to life? Schedule a personalized
            consultation with our experts to explore possibilities and get
            started.
          </p>
        </div>

        {/* Middle Section - Meeting Types */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Choose Your Meeting Type
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {meetingTypes.map((meeting, index) => (
              <div
                key={meeting.title}
                className="parallax-element bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mb-4 mx-auto bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <meeting.icon className="h-6 w-6 text-white" />
                </div>

                <h4 className="text-lg font-bold mb-2 text-center text-white group-hover:text-white transition-all duration-300">
                  {meeting.title}
                </h4>

                <p className="text-white/80 group-hover:text-white text-center text-sm leading-relaxed transition-all duration-300 mb-4">
                  {meeting.description}
                </p>

                <div className="flex items-center justify-center gap-4 text-center">
                  <div className="flex items-center gap-1 text-white/70 text-xs">
                    <Clock className="h-3 w-3" />
                    <span>{meeting.duration}</span>
                  </div>
                  <div className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                    {meeting.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Calendly */}
        <div className="max-w-4xl mx-auto pb-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Schedule Now
              </h3>
              <p className="text-white/80 text-sm">
                Select a time that works for you
              </p>
            </div>

            {/* Calendly Widget Placeholder */}
            <div className="w-full h-[400px] bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6">
              <div className="text-center space-y-4">
                <Calendar className="h-16 w-16 text-white/60 mx-auto" />
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Calendly Integration
                  </h4>
                  <p className="text-white/70 text-sm mb-4">
                    Connect your Calendly account to enable booking
                  </p>
                  <div className="text-xs text-white/60 bg-white/10 p-3 rounded-lg">
                    Replace this placeholder with your actual Calendly embed
                    code:
                    <br />
                    <code className="text-white/80">
                      &lt;iframe src="https://calendly.com/your-account" ...&gt;
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="pt-6 border-t border-white/20 text-center">
              <p className="text-white/80 text-sm mb-4">
                Prefer to talk directly?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97412345678"
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +974 1234 5678
                </a>
                <a
                  href="mailto:hello@qcapsules.qa"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  hello@qcapsules.qa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-8">
        <div className="flex flex-row items-center justify-between gap-2 lg:gap-8">
          {/* Left Tagline */}
          <div className="flex-shrink-0">
            <p className="text-white text-sm lg:text-lg font-medium drop-shadow-lg whitespace-nowrap">
              Let's Build Your Dream
            </p>
          </div>

          {/* Center Quote */}
          <div className="flex-1 text-center max-w-2xl mx-8">
            <blockquote className="text-white/90 text-sm lg:text-base drop-shadow-md italic">
              "Every great project starts with a conversation. Let's discuss how
              Q Capsules can transform your vision into reality."
            </blockquote>
            <cite className="text-white/70 text-xs lg:text-sm font-medium mt-2 block">
              — Q Capsules Team
            </cite>
          </div>

          {/* Right Description */}
          <div className="text-center lg:text-right">
            <p className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs">
              From consultation to—
              <br />
              your perfect capsule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

BookingSection.displayName = "BookingSection";
