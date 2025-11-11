// app/page.tsx
import React from "react";

async function Page() {
  // ⏳ Artificial delay (e.g., 3 seconds)
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <div className="w-full h-full flex flex-row overflow-y-hidden items-center justify-center text-white bg-black">
      <h1 className="text-2xl font-semibold">Search Bar</h1>
    </div>
  );
}

export default Page;
