// src/components/LiveRideRequests.tsx  ← REAL PUSH NOTIFICATIONS + SOUND!
'use client';
import { useState, useEffect, useRef } from 'react';
import { requestNotificationPermission, showNotification } from '@/lib/push';

export default function LiveRideRequests() {
  const [rides, setRides] = useState<any[]>([]);
  const [badgeCount, setBadgeCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Request permission on first load
    requestNotificationPermission();

    // Load sound
    const audio = new Audio("data:audio/wav;base64,UklGRl9vAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQBvACoAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACg=");
    audioRef.current = audio;
  }, []);

  const playSound = () => audioRef.current?.play().catch(() => {});

  useEffect(() => {
    const addNewRide = () => {
      const newRide = {
        id: Date.now().toString(),
        from: Math.random() > 0.5 ? "Delhi Airport" : "Gurgaon Cyber City",
        to: Math.random() > 0.5 ? "Noida Sector 62" : "Greater Kailash",
        type: Math.random() > 0.5 ? "city" : "outstation",
        fee: Math.random() > 0.5 ? 20 : 100,
      };

      setRides(prev => [newRide, ...prev].slice(0, 6));
      setBadgeCount(prev => prev + 1);
      playSound();

      // REAL PUSH NOTIFICATION!
      showNotification(
        "NEW RIDE ALERT!",
        `${newRide.from} → ${newRide.to} | Platform fee only ₹${newRide.fee}`
      );

      // Flash + vibrate screen
      document.body.style.background = "#330000";
      setTimeout(() => document.body.style.background = "", 800);
    };

    addNewRide();
    const interval = setInterval(addNewRide, Math.random() * 10000 + 8000);
    return () => clearInterval(interval);
  }, []);

  const sendBid = (rideId: string) => {
    alert(`Bid sent for ride ${rideId}!`);
    setBadgeCount(0);
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl relative">
      {badgeCount > 0 && (
        <div className="absolute -top-8 -right-8 bg-red-600 text-white text-7xl font-black rounded-full w-32 h-32 flex items-center justify-center animate-ping shadow-2xl border-8 border-black">
          {badgeCount}
        </div>
      )}

      <h2 className="text-6xl font-bold text-center text-cyan-400 mb-8">
        Live Ride Requests
        {badgeCount > 0 && <span className="ml-6 text-red-400 animate-pulse text-5xl">NEW RIDE!</span>}
      </h2>

      <div className="space-y-10">
        {rides.length === 0 ? (
          <p className="text-5xl text-center text-gray-400">Waiting for rides...</p>
        ) : (
          rides.map(ride => (
            <div key={ride.id} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-10 border-4 border-cyan-500 shadow-2xl shadow-cyan-500/70 transform hover:scale-105 transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-6xl font-black text-white">{ride.from}</h3>
                  <p className="text-5xl text-white mt-2">→ {ride.to}</p>
                  <p className="text-3xl text-yellow-400 mt-4">
                    {ride.type === 'city' ? 'City Ride' : 'Outstation'} · Fee only ₹{ride.fee}
                  </p>
                </div>
                <button
                  onClick={() => sendBid(ride.id)}
                  className="px-24 py-12 text-5xl font-black text-black bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl hover:scale-110 transition-all shadow-2xl"
                >
                  SEND BID NOW
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <p className="text-center text-green-400 mt-12 text-3xl font-bold">
        Day 17 of 21 Completed • Push Notifications LIVE!
      </p>
    </div>
  );
}