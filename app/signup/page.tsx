"use client";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
      <form className="flex flex-col gap-3 w-80" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="p-2 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
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
        <button className="bg-blue-600 py-2 rounded mt-3 hover:bg-blue-700">Sign Up</button>
      </form>
      {msg && <p className="mt-4 text-sm text-gray-400">{msg}</p>}
    </div>
  );
}
