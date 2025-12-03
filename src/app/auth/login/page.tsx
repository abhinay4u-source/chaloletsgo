// src/app/auth/login/page.tsx  ← FINAL WITH PAYOUT LINK!
'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <h1 className="text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-16">
          ChaloLetsGo CAB
        </h1>

        <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl space-y-8">
          {/* PASSENGER */}
          <Link href="/passenger">
            <button className="w-full py-6 text-3xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl hover:scale-105 transition-all">
              I am a Passenger
            </button>
          </Link>

          {/* DRIVER */}
          <Link href="/driver">
            <button className="w-full py-6 text-3xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl hover:scale-105 transition-all">
              I am a Driver
            </button>
          </Link>

          {/* MASTER ADMIN */}
          <Link href="/master">
            <button className="w-full py-6 text-3xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl hover:scale-105 transition-all">
              Secret Master Panel (Only Founder)
            </button>
          </Link>

          {/* AUTO PAYOUT CONTROL — NEW! */}
          <Link href="/payout">
            <button className="w-full py-6 text-3xl font-bold text-black bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-green-500/50">
              Auto Payout Control (8 AM & 8 PM)
            </button>
          </Link>

          <p className="text-center text-gray-400 pt-8 text-lg">
            Day 19 • Auto Payouts Ready
          </p>
        </div>
      </div>
    </div>
  );
}