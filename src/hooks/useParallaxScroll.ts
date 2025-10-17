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

    // Set 3D perspective for all sections
    gsap.set([heroRef.current, capsuleCollectionRef.current, visionRef.current, aboutRef.current, brochureRef.current, bookingRef.current], {
      perspective: 1000,
      transformStyle: "preserve-3d"
    });

    // Hero section - 3D rotation and depth effect
    gsap.to(heroRef.current.querySelector(".hero-bg"), {
      rotationX: -15,
      scale: 1.2,
      z: -200,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to(heroRef.current.querySelector(".hero-content"), {
      rotationY: 5,
      z: 100,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Capsule collection - flip and rotate entrance
    gsap.fromTo(
      capsuleCollectionRef.current,
      {
        rotationX: 90,
        opacity: 0,
        z: -300,
      },
      {
        rotationX: 0,
        opacity: 1,
        z: 0,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: capsuleCollectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    // Capsule elements - stagger with skew
    const allElements = capsuleCollectionRef.current.querySelectorAll(
      ".parallax-element, .absolute.bottom-8, button.absolute"
    );
    allElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          rotationY: -45,
          x: -100 * (index % 2 === 0 ? 1 : -1),
          skewX: 10,
        },
        {
          opacity: 1,
          rotationY: 0,
          x: 0,
          skewX: 0,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: capsuleCollectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );
    });

    // Vision section - zoom and rotate entrance
    gsap.fromTo(
      visionRef.current,
      {
        scale: 0.5,
        rotationZ: -15,
        opacity: 0,
      },
      {
        scale: 1,
        rotationZ: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    // Vision content with 3D tilt
    const mainContent = visionRef.current.querySelector(".vision-content");
    if (mainContent) {
      gsap.fromTo(
        mainContent.querySelector("h2"),
        {
          opacity: 0,
          rotationX: -90,
          z: -100,
        },
        {
          opacity: 1,
          rotationX: 0,
          z: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        mainContent.querySelector("p"),
        {
          opacity: 0,
          x: -100,
          skewX: -10,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 65%",
            end: "top 35%",
            scrub: 1.5,
          },
        }
      );
    }

    // Vision elements - wave pattern
    const visionElements =
      visionRef.current.querySelectorAll(".parallax-element");
    visionElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
          rotationY: 90 * (index % 2 === 0 ? 1 : -1),
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    });

    // Vision background - subtle 3D depth
    gsap.to(visionRef.current.querySelector(".vision-bg"), {
      rotationX: 10,
      z: -150,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Vision bottom content - slide from sides
    const bottomContainer =
      visionRef.current.querySelector(".absolute.bottom-8");
    if (bottomContainer) {
      const leftTagline = bottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          { opacity: 0, x: -150, rotationZ: -15 },
          {
            opacity: 1,
            x: 0,
            rotationZ: 0,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const centerQuote = bottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "elastic.out(1, 0.6)",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 55%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const rightDesc = bottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          { opacity: 0, x: 150, rotationZ: 15 },
          {
            opacity: 1,
            x: 0,
            rotationZ: 0,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }
    }

    // About section - slide and skew entrance
    gsap.fromTo(
      aboutRef.current,
      {
        x: -200,
        skewY: 5,
        opacity: 0,
      },
      {
        x: 0,
        skewY: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          end: "top 45%",
          scrub: 2,
        },
      }
    );

    // About content with perspective rotation
    const aboutMainContent = aboutRef.current.querySelector(".about-content");
    if (aboutMainContent) {
      gsap.fromTo(
        aboutMainContent.querySelector("h2"),
        {
          opacity: 0,
          rotationY: 90,
          transformOrigin: "left center",
        },
        {
          opacity: 1,
          rotationY: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "top 35%",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        aboutMainContent.querySelector("p"),
        {
          opacity: 0,
          y: 50,
          rotationX: 45,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 65%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    }

    // About elements - spiral entrance
    const aboutElements =
      aboutRef.current.querySelectorAll(".parallax-element");
    aboutElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.3,
          rotation: 180 * (index % 2 === 0 ? 1 : -1),
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    });

    // About background - tilt parallax
    gsap.to(aboutRef.current.querySelector(".about-bg"), {
      rotationY: -5,
      z: -100,
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // About bottom content - bounce entrance
    const aboutBottomContainer =
      aboutRef.current.querySelector(".absolute.bottom-8");
    if (aboutBottomContainer) {
      const leftTagline = aboutBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          { opacity: 0, y: 100, rotation: -90 },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const centerQuote = aboutBottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          { opacity: 0, scale: 2, rotationZ: 180 },
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            ease: "elastic.out(1, 0.4)",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 55%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const rightDesc = aboutBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          { opacity: 0, y: 100, rotation: 90 },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }
    }

    // Brochure section - zoom from corner
    gsap.fromTo(
      brochureRef.current,
      {
        scale: 0.2,
        x: -500,
        y: 500,
        rotation: -45,
        opacity: 0,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: brochureRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    // Brochure content with wave effect
    const brochureMainContent =
      brochureRef.current.querySelector(".brochure-content");
    if (brochureMainContent) {
      gsap.fromTo(
        brochureMainContent.querySelector("h2"),
        {
          opacity: 0,
          x: -200,
          rotationZ: -20,
        },
        {
          opacity: 1,
          x: 0,
          rotationZ: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brochureRef.current,
            start: "top 70%",
            end: "top 35%",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        brochureMainContent.querySelector("p"),
        {
          opacity: 0,
          x: 200,
          rotationZ: 20,
        },
        {
          opacity: 1,
          x: 0,
          rotationZ: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brochureRef.current,
            start: "top 65%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    }

    // Brochure elements - 3D flip cards
    const brochureElements =
      brochureRef.current.querySelectorAll(".parallax-element");
    brochureElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          rotationY: 180,
          z: -200,
        },
        {
          opacity: 1,
          rotationY: 0,
          z: 0,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    });

    // Brochure background - depth shift
    gsap.to(brochureRef.current.querySelector(".brochure-bg"), {
      rotationZ: 3,
      scale: 1.2,
      z: -80,
      ease: "none",
      scrollTrigger: {
        trigger: brochureRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Brochure bottom content - pop sequence
    const brochureBottomContainer =
      brochureRef.current.querySelector(".absolute.bottom-8");
    if (brochureBottomContainer) {
      const leftTagline =
        brochureBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          { opacity: 0, scale: 0, rotationZ: -360 },
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const centerFeatures =
        brochureBottomContainer.querySelector(".flex.gap-4");
      if (centerFeatures) {
        gsap.fromTo(
          centerFeatures,
          { opacity: 0, y: -100, skewY: 10 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 55%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const rightDesc = brochureBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          { opacity: 0, scale: 0, rotationZ: 360 },
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(3)",
            scrollTrigger: {
              trigger: brochureRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }
    }

    // Booking section - morphing entrance
    gsap.fromTo(
      bookingRef.current,
      {
        clipPath: "circle(0% at 50% 50%)",
        scale: 1.5,
        opacity: 0,
      },
      {
        clipPath: "circle(150% at 50% 50%)",
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: bookingRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    // Booking content with magnetic effect
    const bookingMainContent =
      bookingRef.current.querySelector(".booking-content");
    if (bookingMainContent) {
      gsap.fromTo(
        bookingMainContent.querySelector("h2"),
        {
          opacity: 0,
          scale: 3,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: bookingRef.current,
            start: "top 70%",
            end: "top 35%",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        bookingMainContent.querySelector("p"),
        {
          opacity: 0,
          y: 100,
          skewY: 15,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bookingRef.current,
            start: "top 65%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    }

    // Booking elements - ripple effect
    const bookingElements =
      bookingRef.current.querySelectorAll(".parallax-element");
    bookingElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0,
          rotationZ: 360,
        },
        {
          opacity: 1,
          scale: 1,
          rotationZ: 0,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );
    });

    // Booking background - wave distortion
    gsap.to(bookingRef.current.querySelector(".booking-bg"), {
      rotationX: -10,
      scale: 1.3,
      z: -120,
      ease: "none",
      scrollTrigger: {
        trigger: bookingRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Booking bottom content - converge effect
    const bookingBottomContainer =
      bookingRef.current.querySelector(".absolute.bottom-8");
    if (bookingBottomContainer) {
      const leftTagline =
        bookingBottomContainer.querySelector(".flex-shrink-0");
      if (leftTagline) {
        gsap.fromTo(
          leftTagline,
          { opacity: 0, x: -300, rotationY: -90 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const centerQuote = bookingBottomContainer.querySelector(".flex-1");
      if (centerQuote) {
        gsap.fromTo(
          centerQuote,
          { opacity: 0, y: -200, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 55%",
              end: "top 30%",
              scrub: 1.5,
            },
          }
        );
      }

      const rightDesc = bookingBottomContainer.querySelector(
        ".text-center.lg\\:text-right"
      );
      if (rightDesc) {
        gsap.fromTo(
          rightDesc,
          { opacity: 0, x: 300, rotationY: 90 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bookingRef.current,
              start: "top 60%",
              end: "top 30%",
              scrub: 1.5,
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
