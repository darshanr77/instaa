"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlusSquare,
  AiOutlineSearch,
  AiFillHeart,
  AiFillHome,
  AiFillPlusSquare,
} from "react-icons/ai";
import { MdOutlineExplore, MdOutlineOndemandVideo, MdOutlineBarChart, MdBarChart } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaPaperPlane, FaPlane, FaRegPaperPlane, FaTelegramPlane } from "react-icons/fa";
import { FaPlaceOfWorship, FaPlaneCircleCheck, FaPlaneLock } from "react-icons/fa6";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 border-r border-gray-700 w-[16.3%] h-screen flex flex-col bg-black text-white px-4 py-6">
      {/* Logo */}
      <div className="flex items-center justify-start py-4 mb-4 gap-3 cursor-pointer">
        <Link href="/">
          <Image
          src="/image.png"   // ✅ Path starts with a forward slash
          alt="Description of the image"
          width={190}        // ✅ You must specify width
          height={190}       // ✅ and height
        />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-start gap-[0.8rem] text-[22px]">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {pathname === "/" ? <AiFillHome className="text-[1.6rem]" /> : <AiOutlineHome className="text-[1.6rem]" />}
          <p className="text-[1rem] font-medium">Home</p>
        </Link>

        {/* Search */}
        <Link
          href="/search"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/search" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <AiOutlineSearch className="text-[1.6rem]" />
          <p className="text-[1rem] font-medium">Search</p>
        </Link>

        {/* Explore */}
        <Link
          href="/explore"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/explore" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <MdOutlineExplore className="text-[1.6rem]" />
          <p className="text-[1rem] font-medium">Explore</p>
        </Link>

        {/* Reels */}
        <Link
          href="/reels"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/reels" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <MdOutlineOndemandVideo className="text-[1.6rem]" />
          <p className="text-[1rem] font-medium">Reels</p>
        </Link>

        {/* Messages */}
        <Link
          href="/messages"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/messages" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {pathname === "/messages" ? (
            <FaPaperPlane className="text-[1.6rem]" />
          ) : (
            <FaRegPaperPlane className="text-[1.6rem]" />
          )}
          <p className="text-[1rem] font-medium">Messages</p>
        </Link>

        {/* Notifications */}
        <Link
          href="/notifications"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/notifications" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {pathname === "/notifications" ? (
            <AiFillHeart className="text-[1.6rem]" />
          ) : (
            <AiOutlineHeart className="text-[1.6rem]" />
          )}
          <p className="text-[1rem] font-medium">Notifications</p>
        </Link>

        {/* Create */}
        <Link
          href="/create"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/create" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {pathname === "/create" ? (
            <AiFillPlusSquare className="text-[1.6rem]" />
          ) : (
            <AiOutlinePlusSquare className="text-[1.6rem]" />
          )}
          <p className="text-[1rem] font-medium">Create</p>
        </Link>

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/dashboard" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {pathname === "/dashboard" ? (
            <MdBarChart className="text-[1.6rem]" />
          ) : (
            <MdOutlineBarChart className="text-[1.6rem]" />
          )}
          <p className="text-[1rem] font-medium">Dashboard</p>
        </Link>

        {/* More */}
        <Link
          href="/more"
          className={`flex flex-row gap-3 p-2 items-center transition ${
            pathname === "/more" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          <FiMenu className="text-[1.6rem]" />
          <p className="text-[1rem] font-medium">More</p>
        </Link>
        {/* Profile */}
       <Link
         href="/profile"
         className={`flex flex-row gap-3 p-2 items-center transition ${
         pathname === "/profile" ? "text-white" : "text-gray-400 hover:text-white"
         }`}
       >
        <CgProfile className="text-[1.6rem]" />
        <p className="text-[1rem] font-medium">Profile</p>
       </Link>

      </div>
    </div>
  );
}
