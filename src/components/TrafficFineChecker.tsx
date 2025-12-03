// src/components/TrafficFineChecker.tsx  ← 15-DAY RULE ENFORCED!
'use client';
import { useState } from 'react';

export default function TrafficFineChecker() {
  // Fake data - in real app this comes from Parivahan API every 12 hours
  const hasPendingFine = true;
  const fineAmount = 2400;
  const dueDate = "12 June 2025";
  const vehicleNumber = "DL10C A1234";

  if (!hasPendingFine) {
    return (
      <div className="backdrop-blur-xl bg-green-900/30 rounded-3xl p-10 border border-green-500/50 shadow-2xl shadow-green-500/20">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-6">
          Traffic Fines: All Clear!
        </h2>
        <p className="text-2xl text-center text-gray-200">
          Last checked: Today 6:00 AM · Next check: 6:00 PM
        </p>
        <p className="text-center text-green-400 mt-6 text-lg">
          Day 10 of 21 Completed • Fine Checker LIVE!
        </p>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-red-900/50 rounded-3xl p-10 border border-red-500 shadow-2xl shadow-red-500/50 animate-pulse">
      <h2 className="text-5xl font-bold text-center text-red-400 mb-8">
        BLOCKED – Pending Traffic Fine!
      </h2>

      <div className="text-center mb-8">
        <div className="text-9xl font-black text-red-400 mb-4">
          ₹{fineAmount}
        </div>
        <p className="text-3xl text-white mb-2">Vehicle: {vehicleNumber}</p>
        <p className="text-xl text-gray-300">Must clear by: {dueDate}</p>
      </div>

      <div className="bg-black/50 rounded-2xl p-8 border border-red-500/80">
        <p className="text-2xl text-red-300 font-bold text-center mb-6">
          You are BLOCKED from taking rides
        </p>
        <p className="text-xl text-gray-200 text-center leading-relaxed">
          Upload paid challan receipt below → our team will verify in <strong>30 minutes</strong><br/>
          After approval → you can ride again instantly
        </p>

        <div className="mt-8">
          <div className="border-4 border-dashed border-red-500/50 rounded-2xl h-48 flex items-center justify-center text-6xl text-red-500">
            Upload
          </div>
          <button className="w-full mt-6 py-6 text-2xl font-bold text-white bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl hover:scale-105 transition-all">
            Submit Proof Now
          </button>
        </div>
      </div>

      <p className="text-center text-red-400 mt-8 text-lg">
        Day 10 of 21 Completed • 15-Day Fine Rule ACTIVE!
      </p>
    </div>
  );
}