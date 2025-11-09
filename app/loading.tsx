"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-3xl text-white">
      {/* 🔄 Spinner + Text */}
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        />

        {/* Text */}
        <motion.p
          className="text-lg font-medium tracking-wide text-white/90"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Loading...
        </motion.p>
      </motion.div>

      <style jsx global>{`
        html,
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
