// src/app/master/login/page.tsx  ← ADMIN LOGIN GATE
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      localStorage.setItem('admin-auth', 'true');
      router.push('/master');
    } else {
      alert('Wrong password. Only the Emperor may enter.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 flex items-center justify-center p-8">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-red-500/50 shadow-2xl">
        <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-16">
          MASTER ACCESS
        </h1>
        <form onSubmit={handleLogin} className="space-y-12">
          <input
            type="password"
            placeholder="Enter Emperor Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-10 py-8 text-4xl text-center bg-black/50 rounded-2xl text-white placeholder-gray-500 border-4 border-red-500/50 focus:border-yellow-400 outline-none"
            autoFocus
          />
          <button className="w-full py-10 text-6xl font-black text-white bg-gradient-to-r from-yellow-400 to-red-600 rounded-3xl hover:scale-105 transition-all shadow-2xl">
            ENTER THE EMPIRE
          </button>
        </form>
        <p className="text-center text-gray-400 mt-12 text-2xl">
          Only the true founder may pass
        </p>
      </div>
    </div>
  );
}