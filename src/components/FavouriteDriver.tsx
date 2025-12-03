// src/components/FavouriteDriver.tsx  ← LOVE AT FIRST RIDE!
'use client';
import { useState } from 'react';

export default function FavouriteDriver() {
  const [isFavourite, setIsFavourite] = useState(true);
  const driverName = "Rajesh Kumar";
  const carNumber = "DL10C A1234";
  const totalRides = 18;
  const rating = 4.97;

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Same Car & Driver Again
      </h2>

      <div className="text-center">
        {/* Driver Photo */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-8xl font-black text-white shadow-2xl">
          R
        </div>

        <h3 className="text-5xl font-black text-white mb-2">{driverName}</h3>
        <p className="text-3xl text-gray-300 mb-4">{carNumber}</p>

        <div className="flex justify-center gap-8 mb-8 text-2xl">
          <div className="text-yellow-400">★★★★★ {rating}</div>
          <div className="text-green-400">{totalRides} rides together</div>
        </div>

        {/* Heart Button */}
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className={`w-full py-8 text-4xl font-bold rounded-3xl transition-all transform hover:scale-105 ${
            isFavourite
              ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-2xl shadow-pink-500/50'
              : 'bg-white/20 text-white'
          }`}
        >
          {isFavourite ? '♥ You are my Favourite Driver Forever' : '♡ Make Favourite Again'}
        </button>

        {/* Permanent Priority Message */}
        <div className="mt-10 bg-black/40 rounded-2xl p-8 border border-pink-500/50">
          <p className="text-2xl text-pink-400 font-bold text-center mb-4">
            Permanent Priority Activated
          </p>
          <ul className="text-xl text-gray-200 space-y-3">
            <li>✓ You will get first preference every time</li>
            <li>✓ Car starts from Rajesh bhai’s home location</li>
            <li>✓ Same clean car · Same smiling face</li>
            <li>✓ Like family · Forever</li>
          </ul>
        </div>

        <p className="text-center text-green-400 mt-8 text-lg">
          Day 12 of 21 Completed • Love Feature LIVE!
        </p>
      </div>
    </div>
  );
}