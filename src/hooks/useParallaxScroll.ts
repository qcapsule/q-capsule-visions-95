import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useParallaxScroll = () => {
  const heroRef = useRef<HTMLElement>(null);
  const capsuleCollectionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const brochureRef = useRef<HTMLElement>(null);
  const bookingRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (
      !heroRef.current ||
      !capsuleCollectionRef.current ||
      !visionRef.current ||
      !aboutRef.current ||
      !brochureRef.current ||
      !bookingRef.current
    )
      return;

    // Hero section parallax - no pinning
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Hero section parallax effects with more depth
    tl.to(heroRef.current.querySelector(".hero-bg"), {
      scale: 1.15,
      y: 150,
      duration: 1,
      ease: "none",
    })
      .to(
        heroRef.current.querySelector(".hero-content"),
        {
          y: -150,
          opacity: 0.5,
          scale: 0.95,
          duration: 1,
          ease: "none",
        },
        0
      )
      .to(
        heroRef.current.querySelector(".hero-overlay"),
        {
          opacity: 0.9,
          duration: 1,
          ease: "none",
        },
        0
      );

    // Capsule collection entrance - no overlap
    const capsuleTl = gsap.timeline({
      scrollTrigger: {
        trigger: capsuleCollectionRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: 1.5,
      },
    });

    capsuleTl.fromTo(
      capsuleCollectionRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // All capsule collection elements - faster animation
    const allElements = capsuleCollectionRef.current.querySelectorAll(
      ".parallax-element, .absolute.bottom-8, button.absolute"
    );
    allElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30 + index * 5,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: capsuleCollectionRef.current,
            start: "top bottom+=300px",
            end: "top top",
            scrub: 0.2,
          },
        }
      );
    });

    // Vision section entrance - no overlap
    const visionTl = gsap.timeline({
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    visionTl.fromTo(
      visionRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.92,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Main content animations - faster
    const mainContent = visionRef.current.querySelector(".vision-content");
    if (mainContent) {
      gsap.fromTo(
        mainContent.querySelector("h2"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 140%",
            end: "top 10%",
            scrub: 0.3,
          },
        }
      );

      gsap.fromTo(
        mainContent.querySelector("p"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 135%",
            end: "top 15%",
            scrub: 0.3,
          },
        }
      );
    }

    // Individual element animations for vision section - faster
    const visionElements =
      visionRef.current.querySelectorAll(".parallax-element");
    visionElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50 + index * 20,
          rotation: 2,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 130%",
            end: "top 20%",
            scrub: 0.3,
          },
        }
      );
    });

    // Vision section background parallax
    gsap.to(visionRef.current.querySelector(".vision-bg"), {
      scale: 1.15,
      y: -50,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Bottom content animations for vision section
    const bottomContainer =
      visionRef.current.querySelector(".absolute.bottom-8");
    if (bottomContainer) {
      // Animate the left tagline
      const leftTagline = bottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the center quote
      const centerQuote = bottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 120%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the right description
      const rightDesc = bottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }
    }

    // About section entrance - no overlap
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    aboutTl.fromTo(
      aboutRef.current,
      {
        opacity: 0,
        y: 90,
        scale: 0.94,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Main content animations for about section - faster
    const aboutMainContent = aboutRef.current.querySelector(".about-content");
    if (aboutMainContent) {
      gsap.fromTo(
        aboutMainContent.querySelector("h2"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 140%",
            end: "top 10%",
            scrub: 0.3,
          },
        }
      );

      gsap.fromTo(
        aboutMainContent.querySelector("p"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 135%",
            end: "top 15%",
            scrub: 0.3,
          },
        }
      );
    }

    // Individual element animations for about section - faster
    const aboutElements =
      aboutRef.current.querySelectorAll(".parallax-element");
    aboutElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50 + index * 20,
          rotation: 2,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 130%",
            end: "top 20%",
            scrub: 0.3,
          },
        }
      );
    });

    // About section background parallax
    gsap.to(aboutRef.current.querySelector(".about-bg"), {
      scale: 1.2,
      y: -60,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Bottom content animations for about section
    const aboutBottomContainer =
      aboutRef.current.querySelector(".absolute.bottom-8");
    if (aboutBottomContainer) {
      // Animate the left tagline
      const leftTagline = aboutBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the center quote
      const centerQuote = aboutBottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 120%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the right description
      const rightDesc = aboutBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }
    }

    // Brochure section entrance - no overlap
    const brochureTl = gsap.timeline({
      scrollTrigger: {
        trigger: brochureRef.current,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    brochureTl.fromTo(
      brochureRef.current,
      {
        opacity: 0,
        y: 85,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Main content animations for brochure section - faster
    const brochureMainContent =
      brochureRef.current.querySelector(".brochure-content");
    if (brochureMainContent) {
      gsap.fromTo(
        brochureMainContent.querySelector("h2"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: brochureRef.current,
            start: "top 140%",
            end: "top 10%",
            scrub: 0.3,
          },
        }
      );

      gsap.fromTo(
        brochureMainContent.querySelector("p"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: brochureRef.current,
            start: "top 135%",
            end: "top 15%",
            scrub: 0.3,
          },
        }
      );
    }

    // Individual element animations for brochure section - faster
    const brochureElements =
      brochureRef.current.querySelectorAll(".parallax-element");
    brochureElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50 + index * 20,
          rotation: 2,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 130%",
            end: "top 20%",
            scrub: 0.3,
          },
        }
      );
    });

    // Brochure section background parallax
    gsap.to(brochureRef.current.querySelector(".brochure-bg"), {
      scale: 1.15,
      y: -50,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: brochureRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8,
      },
    });

    // Bottom content animations for brochure section
    const brochureBottomContainer =
      brochureRef.current.querySelector(".absolute.bottom-8");
    if (brochureBottomContainer) {
      // Animate the left tagline
      const leftTagline =
        brochureBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the center features
      const centerFeatures =
        brochureBottomContainer.querySelector(".flex.gap-4");
      if (centerFeatures) {
        gsap.fromTo(
          centerFeatures,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 120%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the right description
      const rightDesc = brochureBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }
    }

    // Booking section entrance - no overlap
    const bookingTl = gsap.timeline({
      scrollTrigger: {
        trigger: bookingRef.current,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    bookingTl.fromTo(
      bookingRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Main content animations for booking section - spans full scroll
    const bookingMainContent =
      bookingRef.current.querySelector(".booking-content");
    if (bookingMainContent) {
      gsap.fromTo(
        bookingMainContent.querySelector("h2"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bookingRef.current,
            start: "top 140%",
            end: "top 10%",
            scrub: 0.3,
          },
        }
      );

      gsap.fromTo(
        bookingMainContent.querySelector("p"),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bookingRef.current,
            start: "top 135%",
            end: "top 15%",
            scrub: 0.3,
          },
        }
      );
    }

    // Individual element animations for booking section - spans full scroll
    const bookingElements =
      bookingRef.current.querySelectorAll(".parallax-element");
    bookingElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50 + index * 20,
          rotation: 2,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 130%",
            end: "top 20%",
            scrub: 0.3,
          },
        }
      );
    });

    // Booking section background parallax
    gsap.to(bookingRef.current.querySelector(".booking-bg"), {
      scale: 1.12,
      y: -40,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: bookingRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8,
      },
    });

    // Bottom content animations for booking section - spans full scroll
    const bookingBottomContainer =
      bookingRef.current.querySelector(".absolute.bottom-8");
    if (bookingBottomContainer) {
      // Animate the left tagline
      const leftTagline =
        bookingBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the center quote
      const centerQuote = bookingBottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Animate the right description
      const rightDesc = bookingBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 125%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    heroRef,
    capsuleCollectionRef,
    visionRef,
    aboutRef,
    brochureRef,
    bookingRef,
  };
};
