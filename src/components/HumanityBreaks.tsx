// src/components/HumanityBreaks.tsx  ← DRIVERS WILL LOVE THIS!
'use client';
import { useState } from 'react';

export default function HumanityBreaks() {
  const [bioLeft, setBioLeft] = useState(4);
  const [fuelLeft, setFuelLeft] = useState(3);
  const [lunchUsed, setLunchUsed] = useState(false);
  const [onBreak, setOnBreak] = useState<'bio'|'fuel'|'lunch'|null>(null);
  const [secondsLeft, setSecondsLeft] = useState(0);

  // Start a break
  const startBreak = (type: 'bio'|'fuel'|'lunch') => {
    if (type === 'bio' && bioLeft === 0) return alert('No bio breaks left today');
    if (type === 'fuel' && fuelLeft === 0) return alert('No fuel breaks left');
    if (type === 'lunch' && lunchUsed) return alert('Lunch already taken');

    const minutes = type === 'bio' ? 10 : type === 'fuel' ? 20 : 45;
    setSecondsLeft(minutes * 60);
    setOnBreak(type);

    if (type === 'bio') setBioLeft(b => b - 1);
    if (type === 'fuel') setFuelLeft(f => f - 1);
    if (type === 'lunch') setLunchUsed(true);
  };

  // Finish early
  const finishEarly = () => {
    setOnBreak(null);
    setSecondsLeft(0);
  };

  // Timer
  if (secondsLeft > 0) {
    setTimeout(() => setSecondsLeft(s => s - 1), 1000);
  } else if (onBreak) {
    setOnBreak(null);
  }

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
        Humanity Breaks (Daily)
      </h2>

      {onBreak ? (
        <div className="text-center">
          <p className="text-3xl text-white mb-6">
            {onBreak === 'bio' ? 'Bio Break' : onBreak === 'fuel' ? 'Fuel Break' : 'Lunch/Dinner'}
          </p>
          <div className="text-9xl font-black text-green-400 mb-8">
            {mins.toString().padStart(2,'0')}:{secs.toString().padStart(2,'0')}
          </div>
          <button
            onClick={finishEarly}
            className="px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl hover:scale-105 transition-all"
          >
            Finished Early
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button
            onClick={() => startBreak('bio')}
            className={`p-8 rounded-3xl text-center transition-all ${bioLeft > 0 ? 'bg-gradient-to-br from-blue-600 to-cyan-600 hover:scale-105' : 'bg-gray-800 opacity-50'}`}
          >
            <div className="text-6xl mb-2">Toilet</div>
            <div className="text-4xl font-black text-white">{bioLeft}/4</div>
            <div className="text-lg text-gray-300">10 min each</div>
          </button>

          <button
            onClick={() => startBreak('fuel')}
            className={`p-8 rounded-3xl text-center transition-all ${fuelLeft > 0 ? 'bg-gradient-to-br from-orange-600 to-red-600 hover:scale-105' : 'bg-gray-800 opacity-50'}`}
          >
            <div className="text-6xl mb-2">Fuel Pump</div>
            <div className="text-4xl font-black text-white">{fuelLeft}/3</div>
            <div className="text-lg text-gray-300">20 min each</div>
          </button>

          <button
            onClick={() => startBreak('lunch')}
            className={`p-8 rounded-3xl text-center transition-all ${!lunchUsed ? 'bg-gradient-to-br from-green-600 to-emerald-600 hover:scale-105' : 'bg-gray-800 opacity-50'}`}
          >
            <div className="text-6xl mb-2">Lunch</div>
            <div className="text-3xl font-black text-white">{lunchUsed ? 'Taken' : '45 min'}</div>
          </button>

          <button className="p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-center hover:scale-105 transition-all">
            <div className="text-6xl mb-2">Bed</div>
            <div className="text-3xl font-black text-white">Go Offline</div>
            <div className="text-lg text-gray-300">Anytime</div>
          </button>
        </div>
      )}

      <p className="text-center text-green-400 mt-8 text-lg">
        Day 7 of 21 Completed • Humanity First!
      </p>
    </div>
  );
}