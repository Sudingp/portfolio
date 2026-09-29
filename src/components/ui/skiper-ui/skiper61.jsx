import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

export const SimpleMouseFollow = ({ className, children, dotColor = "rgba(99, 102, 241, 0.4)" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const handlePointerMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => opacity.set(1)}
      onPointerLeave={() => opacity.set(0)}
      className={cn("relative overflow-hidden cursor-none", className)}
    >
      <motion.div
        style={{
          x,
          y,
          opacity,
          backgroundColor: dotColor,
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full size-12 blur-md z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const SpringMouseFollow = ({ className, children, glowColor = "rgba(56, 189, 248, 0.35)" }) => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  return (
    <div
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        xSpring.set(e.clientX - bounds.left);
        ySpring.set(e.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        opacitySpring.set(1);
        scaleSpring.set(1);
      }}
      onPointerLeave={() => {
        opacitySpring.set(0);
        scaleSpring.set(0);
      }}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
          backgroundColor: glowColor,
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full size-24 blur-xl z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const Skiper61 = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-6 p-6 rounded-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl shadow-xl", className)}>
      <div className="text-center font-mono text-xs text-indigo-400 uppercase tracking-wider">
        Interactive Spring Cursor Follow
      </div>
      <SpringMouseFollow className="w-full max-w-md h-44 rounded-xl border border-white/10 bg-slate-900/60 p-5 flex items-center justify-center text-center">
        <p className="text-xs text-slate-300 font-mono select-none">
          Move your cursor here to feel the spring-physics glow tracking!
        </p>
      </SpringMouseFollow>
    </div>
  );
};

export default Skiper61;
