"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";

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

function HeroPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const image = exploreImages[id];

  if (!image) {
    return (
      <div className="flex items-center justify-center h-screen text-white bg-black">
        Image not found 😢
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 
                   bg-black/70 hover:bg-[#2a2e2e] text-white rounded-full cursor-pointer transition duration-200 z-10"
      >
        <BiLeftArrowAlt size={24} />
      </button>

      {/* Fullscreen Image (Reel Style) */}
      <img
        src={image}
        alt="Selected"
        className="w-[35vw] py-4 rounded-xl h-full object-cover"
      />

      {/* Overlay Info */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center text-white">
        <div className="flex justify-between w-[90%] text-sm text-gray-300">
          <p>❤️ 1.2k Likes</p>
          <p>💬 320 Comments</p>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
