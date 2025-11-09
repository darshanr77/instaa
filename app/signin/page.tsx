"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message);
    if (res.ok) router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
      <form className="flex flex-col gap-3 w-80" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-green-600 py-2 rounded mt-3 hover:bg-green-700">Login</button>
      </form>
      {msg && <p className="mt-4 text-sm text-gray-400">{msg}</p>}
    </div>
  );
}
