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

    // Hero Section - Pinned with dramatic fade and blur
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    heroTl
      .to(heroRef.current.querySelector(".hero-content"), {
        y: 200,
        opacity: 0,
        scale: 0.7,
        filter: "blur(20px)",
        ease: "power2.inOut",
      })
      .to(
        heroRef.current.querySelector(".hero-bg"),
        {
          scale: 1.4,
          filter: "blur(15px) brightness(0.6)",
          ease: "power2.inOut",
        },
        0
      );

    // Capsule Collection - Horizontal slide from right
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

    // Vision Section - Scale zoom with rotation
    gsap.timeline({
      scrollTrigger: {
        trigger: visionRef.current,
        start: "top bottom",
        end: "top 25%",
        scrub: 1.5,
      },
    })
      .fromTo(
        visionRef.current,
        { scale: 0.4, opacity: 0, rotation: -8 },
        { scale: 1, opacity: 1, rotation: 0, ease: "power2.out" }
      )
      .from(
        visionRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 80,
          rotation: 5,
          stagger: 0.12,
          ease: "elastic.out(1, 0.6)",
        },
        0.4
      );

    // About Section - Slide from left with stagger
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "top 25%",
        scrub: 1.5,
      },
    })
      .fromTo(
        aboutRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power3.out" }
      )
      .from(
        aboutRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          x: -100,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.3
      );

    // Brochure Section - Circular reveal with clip-path
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
        {
          clipPath: "circle(0% at 50% 50%)",
          opacity: 0,
          scale: 1.5,
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        }
      )
      .from(
        brochureRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          scale: 0.5,
          rotation: 15,
          stagger: 0.08,
          ease: "back.out(2)",
        },
        0.5
      );

    // Booking Section - Classic fade in from bottom
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
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" }
      )
      .from(
        bookingRef.current.querySelectorAll(".parallax-element"),
        {
          opacity: 0,
          y: 60,
          stagger: 0.06,
          ease: "power3.out",
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
