import React from 'react'

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-hidden  bg-[#000000] text-white items-center justify-center">
      <span className="text-6xl">🧐</span>
      <h1 className="text-3xl font-semibold tracking-wide">Page Not Found</h1>
      <p className="text-gray-400 text-sm">The page you’re looking for doesn’t exist or has been moved.</p>
    </div>
  )
}

export default NotFound
