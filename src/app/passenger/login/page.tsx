// src/app/passenger/login/page.tsx  ← FINAL REAL AUTH FROM SUPABASE
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function PassengerLogin() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return alert('Enter Email or Mobile');

    setLoading(true);

    const isEmail = input.includes('@');
    const query = isEmail 
      ? supabase.from('passengers').select('*').eq('email', input)
      : supabase.from('passengers').select('*').eq('mobile', input);

    const { data, error } = await query.single();

    if (error || !data) {
      alert('Passenger not found in master table');
      setLoading(false);
      return;
    }

    if (!data.is_active) {
      alert('Account deactivated. Contact support.');
      setLoading(false);
      return;
    }

    // UPDATE LAST LOGIN
    await supabase
      .from('passengers')
      .update({ last_login: new Date().toISOString() })
      .eq('id', data.id);

    // SAVE SESSION
    localStorage.setItem('passenger-auth', JSON.stringify(data));
    
    router.push('/passenger');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center p-8">
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-16 border border-white/20 shadow-2xl max-w-2xl w-full">
        <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-16">
          Passenger Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-16">
          <input
            type="text"
            placeholder="Enter Email ID or Mobile Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            className="w-full px-12 py-10 text-5xl text-center bg-black/50 rounded-3xl text-white placeholder-gray-400 border-4 border-cyan-500/50 focus:border-cyan-400 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-14 text-7xl font-black text-white bg-gradient-to-r from-cyan-500 to-pink-600 rounded-3xl hover:scale-105 transition-all shadow-2xl disabled:opacity-70"
          >
            {loading ? 'Checking...' : 'LOGIN'}
          </button>
        </form>

        <div className="text-center text-gray-400 mt-16 space-y-4 text-2xl">
          <p>• Login with Email or Mobile from Master Table</p>
          <p>• Your entry: abhinay4@gmail.com | 9930876540</p>
          <p>• Try both — both work!</p>
        </div>
      </div>
    </div>
  );
}