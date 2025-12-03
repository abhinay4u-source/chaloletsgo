// src/components/CleanRidePromise.tsx  ← CLEANLINESS GUARANTEED!
'use client';
import { useState } from 'react';

export default function CleanRidePromise() {
  const [showChargeScreen, setShowChargeScreen] = useState(false);

  if (showChargeScreen) {
    return (
      <div className="backdrop-blur-xl bg-gradient-to-br from-orange-900 to-red-900 rounded-3xl p-10 border border-orange-500 shadow-2xl shadow-orange-500/50">
        <h2 className="text-5xl font-bold text-center text-orange-400 mb-8">
          ₹300 Mess Charge Applied
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-black/50 rounded-2xl h-48 border-4 border-dashed border-orange-500 flex items-center justify-center text-6xl text-orange-400">
            Photo 1
          </div>
          <div className="bg-black/50 rounded-2xl h-48 border-4 border-dashed border-orange-500 flex items-center justify-center text-6xl text-orange-400">
            Photo 2
          </div>
        </div>

        <div className="bg-black/60 rounded-2xl p-8 text-center">
          <p className="text-3xl text-white mb-4">Passenger has been charged ₹300</p>
          <p className="text-2xl text-green-400 font-bold mb-6">
            Money added to your next payout ✓
          </p>
          <p className="text-xl text-gray-300">
            Support approved in 4 minutes · Thank you for keeping India clean!
          </p>
        </div>

        <button
          onClick={() => setShowChargeScreen(false)}
          className="w-full mt-8 py-6 text-2xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Clean Ride Promise
      </h2>

      <div className="text-center mb-10">
        <div className="text-9xl mb-6">No Eating · No Smoking · No Spilling</div>
        <p className="text-2xl text-gray-300">
          Passenger agreed before ride started
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">Last Wash</div>
          <div className="text-4xl font-black text-green-400">Today 7 AM</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">Last Service</div>
          <div className="text-4xl font-black text-green-400">15 days ago</div>
        </div>
        <div className="bg-white/10 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">Mess Charges</div>
          <div className="text-4xl font-black text-yellow-400">₹900 earned</div>
        </div>
      </div>

      <button
        onClick={() => setShowChargeScreen(true)}
        className="w-full py-8 text-3xl font-bold text-black bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl hover:scale-105 transition-all"
      >
        Report Mess – Charge ₹300
      </button>

      <p className="text-center text-green-400 mt-8 text-lg">
        Day 11 of 21 Completed • Clean Ride Promise LIVE!
      </p>
    </div>
  );
}