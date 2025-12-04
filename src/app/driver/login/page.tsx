// src/app/driver/login/page.tsx  ← DRIVER LOGIN PAGE
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function DriverLogin() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return alert('Enter Email or Mobile');

    setLoading(true);

    const isEmail = input.includes('@');
    const query = isEmail
      ? supabase.from('drivers').select('*').eq('email', input)
      : supabase.from('drivers').select('*').eq('mobile', input);

    const { data, error } = await query.single();

    if (error || !data) {
      alert('Driver not found. Contact admin to register.');
      setLoading(false);
      return;
    }

    if (!data.is_active) {
      alert('Driver account deactivated.');
      setLoading(false);
      return;
    }

    // Update last login
    await supabase
      .from('drivers')
      .update({ last_login: new Date().toISOString() })
      .eq('id', data.id);

    localStorage.setItem('driver-auth', JSON.stringify(data));
    router.push('/driver');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-emerald-900 flex items-center justify-center p-8">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20 shadow-2xl max-w-2xl w-full">
        <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-16">
          Driver Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-16">
          <input
            type="text"
            placeholder="Enter Email or Mobile Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            className="w-full px-12 py-10 text-5xl text-center bg-black/50 rounded-3xl text-white placeholder-gray-400 border-4 border-green-500/50 focus:border-green-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-14 text-7xl font-black text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl hover:scale-105 transition-all shadow-2xl disabled:opacity-70"
          >
            {loading ? 'Checking...' : 'ENTER DRIVER PORTAL'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-16 text-2xl">
          Only registered drivers can enter
        </p>
      </div>
    </div>
  );
}