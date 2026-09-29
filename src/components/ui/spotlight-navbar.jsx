import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightNavbar({
  items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  className,
  onItemClick,
  defaultActiveIndex = 0,
}) {
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [hoverX, setHoverX] = useState(null);

  // Refs for the light positions for spring animation
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          }
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  // Ambience movement for active item
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  const handleItemClick = (item, index) => {
    setActiveIndex(index);
    onItemClick?.(item, index);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "relative h-10 sm:h-11 rounded-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-lg shadow-red-950/20",
        className
      )}
      style={{
        "--spotlight-color": "rgba(239, 68, 68, 0.35)",
        "--ambience-color": "rgba(239, 68, 68, 1)",
      }}
    >
      {/* Content */}
      <ul className="relative flex items-center h-full px-1.5 gap-0.5 z-[10]">
        {items.map((item, idx) => (
          <li key={idx} className="relative h-full flex items-center justify-center">
            <a
              href={item.href}
              data-index={idx}
              onClick={() => handleItemClick(item, idx)}
              className={cn(
                "px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
                activeIndex === idx
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* 1. Moving Spotlight */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] opacity-0 transition-opacity duration-300"
        style={{
          opacity: hoverX !== null ? 1 : 0,
          background: `
            radial-gradient(
              100px circle at var(--spotlight-x) 100%, 
              var(--spotlight-color) 0%, 
              transparent 70%
            )
          `
        }}
      />

      {/* 2. Active Ambience underline indicator */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
        style={{
          background: `
            radial-gradient(
              50px circle at var(--ambience-x) 0%, 
              var(--ambience-color) 0%, 
              transparent 100%
            )
          `
        }}
      />
    </nav>
  );
}
