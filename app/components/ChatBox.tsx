"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import type { ChatContact } from "../messages/data";

type Props = {
  chat: ChatContact | null;
};

export default function ChatBox({ chat }: Props) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(chat?.messages || []);

  if (!chat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-400">
        <div className="border border-gray-700 rounded-full p-4 mb-4">
          <FiSend size={48} />
        </div>
        <h1 className="text-xl font-semibold text-white mb-1">
          Your messages
        </h1>
        <p className="text-sm text-gray-400 mb-4">
          Send a message to start a chat.
        </p>
      </div>
    );
  }

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    const msg = {
      sender: "me" as const,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col flex-1 bg-black text-white">
      {/* Header */}
      <div className="flex items-center border-b border-gray-800 px-4 py-3">
        <img
          src={chat.img}
          alt={chat.name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h2 className="font-semibold">{chat.name}</h2>
          <p className="text-xs text-gray-400">Active now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-hide">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] px-3 py-2 rounded-2xl text-sm ${
                m.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-neutral-800 text-gray-200 rounded-bl-none"
              }`}
            >
              {m.text}
              <div className="text-[10px] text-gray-400 mt-1 text-right">
                {m.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="border-t border-gray-800 px-4 py-3 flex items-center gap-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message..."
          className="flex-1 bg-neutral-900 text-sm px-4 py-2 rounded-full outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition"
        >
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
}
