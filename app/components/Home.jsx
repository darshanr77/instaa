import React from "react";
import LeftSidebar from "./LeftSidebar";
import Stories from "./Stories";
import PostCard from "./PostCard";
import RightSidebar from "./RightSidebar";

function Home() {
  return (
    <div className="w-full h-screen bg-black text-white flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-[18%] border-r border-gray-800">
        <LeftSidebar />
      </div>

      {/* Center Content */}
      <div className="w-[55%] h-full flex flex-col items-center overflow-y-auto scrollbar-hide">
        {/* Top Stories */}
        <div className="w-full border-b border-gray-800 p-4">
          <Stories />
        </div>

        {/* Posts Feed */}
        <div className="w-full flex flex-col cursor-pointer items-center space-y-6 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => (
            <PostCard
              key={id}
              username={`user_${id}`}
              image={`/image${id}.png`}
            />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[27%] border-l border-gray-800 p-6 hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
