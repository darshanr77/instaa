"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaHeart, FaCommentDots, FaShare, FaPlay, FaPause } from "react-icons/fa";

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
];

export default function Page() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [currentReel, setCurrentReel] = useState<number | null>(null);
  const [showPauseIcon, setShowPauseIcon] = useState<Record<number, boolean>>({});
  const [isPlaying, setIsPlaying] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLVideoElement).dataset.index);
          const video = videoRefs.current[index];
          if (!video) return;

          if (entry.isIntersecting) {
            // Stop all other videos
            videoRefs.current.forEach((v, i) => {
              if (v && i !== index) {
                v.pause();
                setIsPlaying((prev) => ({ ...prev, [i]: false }));
              }
            });

            // Play the current one
            video.play();
            setIsPlaying((prev) => ({ ...prev, [index]: true }));
            setCurrentReel(index);

            // Show pause icon briefly
            setShowPauseIcon((prev) => ({ ...prev, [index]: true }));
            setTimeout(
              () => setShowPauseIcon((prev) => ({ ...prev, [index]: false })),
              500
            );
          } else {
            video.pause();
            setIsPlaying((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.8 }
    );

    videoRefs.current.forEach((video) => video && observer.observe(video));

    return () => observer.disconnect();
  }, []);

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // ▶️ Play video
      video.play();
      setIsPlaying((prev) => ({ ...prev, [index]: true }));

      // Show pause icon briefly
      setShowPauseIcon((prev) => ({ ...prev, [index]: true }));
      setTimeout(
        () => setShowPauseIcon((prev) => ({ ...prev, [index]: false })),
        500
      );
    } else {
      // ⏸️ Pause video
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }
  };

  const toggleLike = (id: number, index: number) => {
    // stop reel when user likes (Instagram-style behavior)
    const video = videoRefs.current[index];
    if (video && !video.paused) {
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full h-screen bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide flex flex-col items-center">
      {reelsData.map((reel, index) => {
        const playing = isPlaying[index];
        const showPause = showPauseIcon[index];

        return (
          <div
            key={reel.id}
            className="relative w-[30vw] h-screen flex items-center justify-center snap-start"
          >
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={reel.video}
              data-index={index}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              onClick={() => handleVideoClick(index)}
            />

            {/* Center Play/Pause Icons */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Show play icon when paused */}
              {!playing && (
                <FaPlay className="text-white text-6xl opacity-90 cursor-pointer transition-opacity duration-300" />
              )}

              {/* Show pause icon briefly when playing */}
              {playing && showPause && (
                <FaPause className="text-white text-6xl opacity-90 cursor-pointer transition-opacity duration-300" />
              )}
            </div>

            {/* Overlay social icons */}
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
                onClick={() => toggleLike(reel.id, index)}
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
        );
      })}
    </div>
  );
}
