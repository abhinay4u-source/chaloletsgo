// src/app/master/login/page.tsx  ← FINAL: Admin / Admin
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MasterLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'Admin' && password === 'Admin') {
      localStorage.setItem('admin-auth', 'true');
      router.push('/master');
    } else {
      alert('Wrong credentials. Only the Emperor may enter.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 flex items-center justify-center p-8">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-yellow-500/50 shadow-2xl max-w-2xl w-full">
        <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-16">
          MASTER ACCESS
        </h1>

        <form onSubmit={handleLogin} className="space-y-12">
          <input
            type="text"
            placeholder="Login ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-10 py-8 text-4xl text-center bg-black/50 rounded-2xl text-white placeholder-gray-400 border-4 border-yellow-500/50 focus:border-yellow-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-10 py-8 text-4xl text-center bg-black/50 rounded-2xl text-white placeholder-gray-400 border-4 border-red-500/50 focus:border-red-400 outline-none"
          />

          <button className="w-full py-12 text-6xl font-black text-white bg-gradient-to-r from-yellow-400 to-red-600 rounded-3xl hover:scale-105 transition-all shadow-2xl">
            ENTER THE EMPIRE
          </button>
        </form>

        <div className="text-center text-gray-400 mt-12 space-y-2 text-2xl">
          <p>Login ID: <strong>Admin</strong></p>
          <p>Password: <strong>Admin</strong></p>
        </div>
      </div>
    </div>
  );
}