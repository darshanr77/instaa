"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const dots = Array.from({ length: 5 }); // Windows uses 5 visible dots

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Windows-style loading dots */}
      <div className="relative w-28 h-28">
        {dots.map((_, i) => (
          <motion.span
            key={i}
            className="absolute top-1/2 left-1/2 block w-3 h-3 bg-white rounded-full"
            style={{
              transformOrigin: "0 -40px", // radius of orbit
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "linear",
              delay: i * 0.12, // each dot slightly delayed
            }}
          />
        ))}
      </div>

      {/* Text */}
      <motion.p
        className="mt-10 text-2xlfont-medium text-gray-300 tracking-wide"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        Loading...
      </motion.p>

      <style jsx global>{`
        html,
        body {
          overflow: hidden;
          background: black;
        }
      `}</style>
    </div>
  );
}
