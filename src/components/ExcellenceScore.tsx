// src/components/ExcellenceScore.tsx  ← DRIVERS WILL LOVE THIS!
'use client';
import { useState } from 'react';

export default function ExcellenceScore() {
  // Fake score that changes every day (real logic later)
  const score = 96;
  const rank = "Top 3% in Delhi-NCR";
  const bonus = score >= 90 ? "₹800" : "₹0";
  const daysForBonus = score >= 90 ? 2 : 5;

  const getColor = () => {
    if (score >= 95) return "from-cyan-400 to-blue-500";
    if (score >= 90) return "from-green-400 to-emerald-500";
    if (score >= 80) return "from-yellow-400 to-orange-500";
    return "from-red-500 to-pink-600";
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Your Excellence Score
      </h2>

      <div className="relative">
        <div className="text-9xl font-black text-center text-white mb-4">
          {score}/100
        </div>
        <div className={`text-3xl font-bold text-center bg-gradient-to-r ${getColor()} bg-clip-text text-transparent`}>
          {rank}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 text-center">
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="text-5xl font-black text-green-400">₹{bonus}</div>
          <div className="text-gray-300">Monday Bonus</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6">
          <div className="text-5xl font-black text-yellow-400">{daysForBonus} days</div>
          <div className="text-gray-300">to keep 90+</div>
        </div>
      </div>

      {/* Daily WhatsApp Coaching Message */}
      <div className="mt-10 bg-black/40 rounded-2xl p-6 border border-green-500/50">
        <p className="text-2xl text-green-400 font-bold text-center mb-4">
          Today’s Coaching Message (auto-sent 7:00 AM)
        </p>
        <div className="text-lg text-gray-200 leading-relaxed">
          Namaste Rajesh bhai  
          Aaj aapka Excellence Score: <strong>96/100</strong> (shandaar!)  
          Kal car wash karwaya tha — +10 points mil gaye!  
          Bas <strong>2 aur din 90+</strong> rakho, Monday ko <strong>₹800 bonus</strong> aapka pakka!  
          ChaloLetsGo — Driver-First Cab
        </div>
      </div>

      <p className="text-center text-green-400 mt-8 text-lg">
        Day 8 of 21 Completed • Excellence Score LIVE!
      </p>
    </div>
  );
}