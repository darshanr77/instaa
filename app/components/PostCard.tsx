import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineComment, AiOutlineSend } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

function PostCard({ username, image }: { username: string; image: string }) {
  return (
    <div className="w-[470px] bg-black border border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-3">
        <Image
          src="/user.png"
          alt="user"
          width={35}
          height={35}
          className="rounded-full mr-3"
        />
        <span className="font-semibold text-sm">{username}</span>
      </div>

      {/* Image */}
      <div className="w-full h-[500px] relative">
        <Image
          src={image}
          alt="post"
          fill
          className="object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between p-3">
        <div className="flex space-x-4 text-2xl">
          <AiOutlineHeart />
          <AiOutlineComment />
          <AiOutlineSend />
        </div>
        <BsBookmark className="text-2xl" />
      </div>

      {/* Caption */}
      <div className="px-3 pb-3 text-sm text-gray-300">
        <span className="font-semibold">{username}</span> Enjoying the sunset 🌇
      </div>
    </div>
  );
}

export default PostCard;
