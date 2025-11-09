import React from "react";
import Image from "next/image";

const stories = [
  { id: 1, name: "aayatrajputt", img: "/story1.png" },
  { id: 2, name: "karnataka", img: "/story2.png" },
  { id: 3, name: "kukuttv", img: "/story3.png" },
  { id: 4, name: "onevision", img: "/story4.png" },
  { id: 5, name: "praffulgarg", img: "/story5.png" },
  { id: 6, name: "hiten.codes", img: "/story6.png" },
];

function Stories() {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
      {stories.map((story) => (
        <div key={story.id} className="flex cursor-pointer flex-col items-center">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-pink-600">
            <div className="w-full h-full bg-black p-[2px] rounded-full">
              <Image
                src={story.img}
                alt={story.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <p className="text-xs mt-2 text-gray-300 truncate w-16 text-center">
            {story.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
