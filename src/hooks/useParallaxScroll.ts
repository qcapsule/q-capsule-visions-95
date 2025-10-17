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

    // Hero Section - Pin and fade
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    heroTl
      .to(heroRef.current.querySelector(".hero-content"), {
        y: 100,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
      })
      .to(
        heroRef.current.querySelector(".hero-bg"),
        {
          scale: 1.2,
          ease: "power2.out",
        },
        0
      );

    // Capsule Collection - Horizontal slide from right (KEEPING THIS)
    gsap.timeline({
      scrollTrigger: {
        trigger: capsuleCollectionRef.current,
        start: "top bottom",
        end: "top 20%",
        scrub: 1.5,
      },
    })
      .fromTo(
        capsuleCollectionRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power3.out" }
      )
      .from(
        capsuleCollectionRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          x: 100,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.3
      );

    // Vision Section - Simple fade up
    gsap.timeline({
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top bottom",
        end: "top 30%",
        scrub: 1.5,
      },
    })
      .fromTo(
        visionRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      )
      .from(
        visionRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.3
      );

    // About Section - Simple fade up
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "top 30%",
        scrub: 1.5,
      },
    })
      .fromTo(
        aboutRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      )
      .from(
        aboutRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.3
      );

    // Brochure Section - Simple fade up
    gsap.timeline({
      scrollTrigger: {
        trigger: brochureRef.current,
        start: "top bottom",
        end: "top 30%",
        scrub: 1.5,
      },
    })
      .fromTo(
        brochureRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      )
      .from(
        brochureRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.3
      );

    // Booking Section - Simple fade up
    gsap.timeline({
      scrollTrigger: {
        trigger: bookingRef.current,
        start: "top bottom",
        end: "top 40%",
        scrub: 1.5,
      },
    })
      .fromTo(
        bookingRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out" }
      )
      .from(
        bookingRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 50,
          stagger: 0.06,
          ease: "power2.out",
        },
        0.3
      );

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
