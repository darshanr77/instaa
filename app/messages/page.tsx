"use client";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineEdit } from "react-icons/ai";
import ChatBox from "../components/ChatBox";
import { allChats } from "./data";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = allChats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-black text-white">
      {/* LEFT PANEL */}
      <div className="w-[30%] min-w-[300px] border-r border-gray-800 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-xl font-semibold">darshan.kok</h1>
          <AiOutlineEdit size={20} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>

        {/* Search */}
        <div className="p-3 relative">
          <AiOutlineSearch className="absolute top-5 left-5 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md bg-neutral-900 pl-9 py-2 text-sm placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-600"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {filtered.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`flex items-center px-3 py-2 hover:bg-neutral-900 cursor-pointer transition ${
                selectedChat === chat.id ? "bg-neutral-900" : ""
              }`}
            >
              <img src={chat.img} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium">{chat.name}</h3>
                <p className="text-xs text-gray-400">
                  {chat.messages[chat.messages.length - 1].text.slice(0, 25)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <ChatBox chat={allChats.find((c) => c.id === selectedChat) || null} />
    </div>
  );
}
