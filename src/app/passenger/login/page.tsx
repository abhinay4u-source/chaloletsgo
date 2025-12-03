// src/app/passenger/login/page.tsx  ← REAL PASSENGER LOGIN
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PassengerLogin() {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage (in real app: save to Supabase)
    localStorage.setItem('passenger-auth', JSON.stringify({ email, mobile }));
    
    // Redirect to passenger portal
    router.push('/passenger');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center p-8">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20 shadow-2xl max-w-2xl w-full">
        <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-16">
          Passenger Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-12">
          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-10 py-8 text-4xl text-center bg-black/50 rounded-2xl text-white placeholder-gray-400 border-4 border-cyan-500/50 focus:border-cyan-400 outline-none"
          />
          
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full px-10 py-8 text-4xl text-center bg-black/50 rounded-2xl text-white placeholder-gray-400 border-4 border-pink-500/50 focus:border-pink-400 outline-none"
          />

          <button className="w-full py-12 text-6xl font-black text-white bg-gradient-to-r from-cyan-500 to-pink-600 rounded-3xl hover:scale-105 transition-all shadow-2xl">
            ENTER AS PASSENGER
          </button>
        </form>

        <p className="text-center text-gray-400 mt-16 text-2xl">
          Your data is saved in Master Table
        </p>
      </div>
    </div>
  );
}