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
import {
  MdOutlineExplore,
  MdOutlineOndemandVideo,
  MdOutlineBarChart,
  MdBarChart,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaRegPaperPlane, FaPaperPlane } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

export default function LeftSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: <AiOutlineHome />, active: <AiFillHome />, label: "Home" },
    { href: "/search", icon: <AiOutlineSearch />, label: "Search" },
    { href: "/explore", icon: <MdOutlineExplore />, label: "Explore" },
    { href: "/reels", icon: <MdOutlineOndemandVideo />, label: "Reels" },
    { href: "/messages", icon: <FaRegPaperPlane />, active: <FaPaperPlane />, label: "Messages" },
    { href: "/notifications", icon: <AiOutlineHeart />, active: <AiFillHeart />, label: "Notifications" },
    { href: "/create", icon: <AiOutlinePlusSquare />, active: <AiFillPlusSquare />, label: "Create" },
    { href: "/dashboard", icon: <MdOutlineBarChart />, active: <MdBarChart />, label: "Dashboard" },
    { href: "/profile", icon: <CgProfile />, label: "Profile" },
    { href: "/more", icon: <FiMenu />, label: "More" },
  ];

  return (
    <div
      className="group fixed top-0 left-0 h-screen flex flex-col bg-black text-white
                 border-r border-gray-800 px-2 py-6 w-[5vw] hover:w-[14vw]
                 transition-all duration-300 overflow-hidden z-50"
    >
      {/* ✅ Instagram Logo */}
      <div className="flex items-center justify-center mb-8">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-900"
        >
          {/* Logo should ALWAYS show */}
          <BsInstagram size={26} className="text-white flex-shrink-0" />
          
          {/* Text only on hover */}
          <span
            className="text-lg font-semibold tracking-wide whitespace-nowrap
                       opacity-0 translate-x-[-10px]
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300"
          >
            Instagram
          </span>
        </Link>
      </div>

      {/* ✅ Navigation Links */}
      <nav className="flex flex-col gap-2">
        {links.map(({ href, icon, active, label }) => {
          const isActive = pathname === href;
          const Icon = isActive && active ? active : icon;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 py-2 pl-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`}
            >
              <span className="text-2xl min-w-[32px] flex justify-center">{Icon}</span>
              <span
                className="opacity-0 translate-x-[-10px]
                           group-hover:opacity-100 group-hover:translate-x-0
                           transition-all duration-300 text-sm font-medium whitespace-nowrap"
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
