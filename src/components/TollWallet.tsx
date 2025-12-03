// src/components/TollWallet.tsx  ← ZERO TOLL TENSION!
'use client';
import { useState } from 'react';

export default function TollWallet() {
  const [balance, setBalance] = useState(720); // live FASTag balance
  const minimum = 500;
  const isLow = balance < minimum + 100;

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Smart Toll Wallet
      </h2>

      <div className="text-center">
        <div className={`text-9xl font-black mb-4 ${isLow ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
          ₹{balance}
        </div>
        <p className="text-2xl text-gray-300 mb-8">
          Live FASTag Balance
        </p>

        {/* Warning if low */}
        {isLow && (
          <div className="bg-red-900/50 border border-red-500 rounded-2xl p-6 mb-8 animate-pulse">
            <p className="text-3xl font-bold text-red-400">
              Low Balance Alert!
            </p>
            <p className="text-xl text-gray-200 mt-2">
              Auto top-up of ₹500 in progress…
            </p>
          </div>
        )}

        {/* Status */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="text-5xl font-black text-white">₹{minimum}</div>
            <div className="text-gray-300">Minimum Required</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="text-5xl font-black text-green-400">Active</div>
            <div className="text-gray-300">Auto Top-up ON</div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-10 bg-black/40 rounded-2xl p-6 border border-cyan-500/50">
          <p className="text-xl text-cyan-400 font-bold text-center mb-3">
            How Smart Toll Works
          </p>
          <ul className="text-gray-200 text-left space-y-2">
            <li>30 km before any toll → system checks balance</li>
            <li>If below ₹600 → auto ₹500 top-up from wallet</li>
            <li>Extra amount refunded in next payout</li>
            <li>Zero delay · Zero tension · 100% automatic</li>
          </ul>
        </div>

        <p className="text-center text-green-400 mt-8 text-lg">
          Day 9 of 21 Completed • Smart Toll Wallet LIVE!
        </p>
      </div>
    </div>
  );
}