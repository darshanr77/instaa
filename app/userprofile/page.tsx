"use client";
import React from "react";
import Image from "next/image";
import { FiPlusCircle, FiSettings } from "react-icons/fi";
import { BsGrid3X3, BsBookmark, BsPerson } from "react-icons/bs";

function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center pt-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80" // replace with your local/public image path
            alt="Profile"
            width={130}
            height={150}
            className="rounded-[50%] cursor-pointer object-cover"
          />
          <div className="absolute -top-2 -right-3 bg-gray-800 text-xs px-2 py-1 rounded-full">
            Note...
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row items-center gap-2 text-lg font-semibold">
            <p>darshan.kok</p>
            <FiSettings className="text-[1.2rem]" />
          </div>

          <p className="text-gray-400 text-sm mt-1">Darshan</p>

          <div className="flex flex-row gap-5 text-sm mt-3">
            <p><span className="font-semibold cursor-pointer">0</span> posts</p>
            <p><span className="font-semibold cursor-pointer">0</span> followers</p>
            <p><span className="font-semibold cursor-pointer">91</span> following</p>
          </div>

          <p className="text-sm text-gray-400 mt-3">Product/service</p>
          
          <a href="https://www.instagram.com/cristiano/"><p className="text-blue-500 text-sm cursor-pointer">@cristiano</p></a>
          <a href="https://www.instagram.com/darshan.kok/"><p className="text-gray-400 text-sm cursor-pointer">@darshan.kok</p></a>

          {/* Buttons */}
          <div className="flex flex-row gap-3 mt-5">
            <button className="bg-[#262626] cursor-pointer px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#2f2f2f]">
              Edit profile
            </button>
            <button className="bg-[#262626] cursor-pointer px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#2f2f2f]">
              View archive
            </button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="w-[70px] h-[70px] rounded-full border-2 border-gray-500 flex items-center justify-center">
            <FiPlusCircle className="text-3xl cursor-pointer text-gray-400" />
          </div>
          <p className="text-sm mt-2 cursor-pointer text-gray-400">New</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-700 mt-8 w-full max-w-2xl flex justify-center">
        <div className="flex flex-row gap-12 mt-3">
          <BsGrid3X3 className="text-white cursor-pointer text-[1.3rem]" />
          <BsBookmark className="text-gray-400 cursor-pointer text-[1.3rem]" />
          <BsPerson className="text-gray-400 cursor-pointer text-[1.3rem]" />
        </div>
      </div>

      {/* Share Photos Section */}
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center">
          <FiPlusCircle className="text-3xl cursor-pointer text-gray-400" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">Share Photos</h2>
        <p className="text-gray-400 text-sm mt-2 text-center">
          When you share photos, they will appear on your profile.
        </p>
        <button className="text-blue-500 text-sm  cursor-pointer font-medium mt-3">
          Share your first photo
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
