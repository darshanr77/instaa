"use client";
import React, { useEffect, useState } from "react";
import Home from "./components/Home.jsx";
import Loading from "./loading"; // reuse your loader

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay to ensure loader animates properly on reload
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-full flex flex-row overflow-y-hidden">
      <Home />
    </div>
  );
}
