"use client";
import React from "react";
import { useRouter } from "next/navigation";

const exploreImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1605460375648-278bcbd579a6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
];

function ExplorePage() {
  const router = useRouter();

  const handleImageClick = (id: number) => {
    router.push(`/explore/${id}`);
  };

  return (
    <div className="w-full h-screen bg-black overflow-y-scroll scrollbar-hide p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-[5vw]">
        {exploreImages.map((src, i) => (
          <div
            key={i}
            onClick={() => handleImageClick(i)}
            className="relative group overflow-hidden rounded-[4px] cursor-pointer aspect-square"
          >
            <img
              src={src}
              alt={`Explore ${i}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-white text-sm">
                ❤️ <span>1.2k</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm">
                💬 <span>320</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
