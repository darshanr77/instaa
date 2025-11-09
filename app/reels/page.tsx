"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";

interface Reel {
  id: number;
  video: string;
  caption: string;
  username: string;
}

const reelsData: Reel[] = [
  {
    id: 1,
    video: "/videos/reel.mp4",
    caption: "Indira Canteen Kitchen Tour 🍛",
    username: "news18kannada",
  },
  {
    id: 2,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 3,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 4,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 5,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 6,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 7,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 8,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 9,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 10,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 11,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 12,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 13,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 14,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 15,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
   {
    id: 16,
    video: "/videos/reel2.mp4",
    caption: "Serving the community with love ❤️",
    username: "news18kannada",
  },
  {
    id: 17,
    video: "/videos/reel3.mp4",
    caption: "Inside look at Haveri canteen 🏢",
    username: "news18kannada",
  },
];

export default function Page() {
  // ✅ type the ref correctly
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // ✅ specify shape of likes
  const [likes, setLikes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) video.play();
          else video.pause();
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.paused ? video.play() : video.pause();
  };

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full h-screen bg-black overflow-y-scroll snap-y flex flex-col items-center justify-center snap-mandatory scrollbar-hide">
      {reelsData.map((reel, index) => (
        <div
          key={reel.id}
          className="w-[30vw] h-screen flex items-center justify-center snap-start relative"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.video}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            onClick={() => handleVideoClick(index)}
          />
          {/* Overlay */}
          <div className="absolute top-5 left-5 flex gap-3">
            <img src="/icons/facebook.svg" className="w-6 h-6" alt="fb" />
            <img src="/icons/instagram.svg" className="w-6 h-6" alt="ig" />
            <img src="/icons/twitter.svg" className="w-6 h-6" alt="tw" />
            <img src="/icons/youtube.svg" className="w-6 h-6" alt="yt" />
          </div>

          {/* Caption */}
          <div className="absolute bottom-20 left-6 text-white w-[80%]">
            <h2 className="text-lg font-semibold">@{reel.username}</h2>
            <p className="text-sm text-gray-200 mt-1">{reel.caption}</p>
          </div>

          {/* Action Buttons */}
          <div className="absolute right-5 bottom-28 flex flex-col items-center gap-5 text-white">
            <button
              onClick={() => toggleLike(reel.id)}
              className={`hover:scale-110 cursor-pointer transition ${
                likes[reel.id] ? "text-red-500" : ""
              }`}
            >
              <FaHeart className="text-3xl" />
              <p className="text-xs mt-1">9.9K</p>
            </button>
            <button className="hover:scale-110 cursor-pointer transition">
              <FaCommentDots className="text-3xl" />
              <p className="text-xs mt-1">225</p>
            </button>
            <button className="hover:scale-110 cursor-pointer transition">
              <FaShare className="text-3xl" />
              <p className="text-xs mt-1">Share</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
