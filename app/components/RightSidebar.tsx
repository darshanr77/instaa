import React from "react";
import Image from "next/image";

function RightSidebar() {
  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/profile.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full cursor-pointer"
          />
          <div>
            <p className="font-semibold text-sm">darshan.kok</p>
            <p className="text-xs text-gray-400">Darshan</p>
          </div>
        </div>
        <button className="text-blue-400 text-sm cursor-pointer font-semibold">Switch</button>
      </div>

      {/* Suggestions */}
      <div>
        <p className="text-gray-400 text-sm mb-3">Suggested for you</p>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="flex items-center justify-between mb-3 text-sm"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/user.png"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">user_{id}</p>
                <p className="text-gray-400 text-xs">New to Instagram</p>
              </div>
            </div>
            <button className="text-blue-400 cursor-pointer font-semibold">Follow</button>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        © 2025 INSTAGRAM FROM META
      </p>
    </div>
  );
}

export default RightSidebar;
