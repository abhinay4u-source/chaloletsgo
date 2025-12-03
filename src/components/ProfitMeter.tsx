// src/components/ProfitMeter.tsx  ← FINAL VERSION WITH SUPABASE SAVE!
'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ProfitMeter({ userId }: { userId?: string }) {
  const [mileage, setMileage] = useState(14);
  const [loading, setLoading] = useState(true);

  // Load saved mileage when component opens
  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    
    supabase
      .from('driver_profiles')
      .select('car_mileage')
      .eq('user_id', userId)
      .single()
      .then(({ data }) => {
        if (data?.car_mileage) setMileage(data.car_mileage);
        setLoading(false);
      });
  }, [userId]);

  // Save mileage every time slider moves
  const saveMileage = async (newMileage: number) => {
    setMileage(newMileage);
    if (!userId) return;

    await supabase
      .from('driver_profiles')
      .upsert({ user_id: userId, car_mileage: newMileage });
  };

  // Calculation (same as yesterday)
  const tripFare = 950, distance = 85, toll = 220, platformFee = 100;
  const fuelCost = (distance / mileage) * 98;
  const netProfit = tripFare - fuelCost - toll - platformFee;
  const profitPerKm = netProfit / distance;
  const color = profitPerKm >= 20 ? "text-green-400" : profitPerKm >= 15 ? "text-yellow-400" : "text-red-400";

  if (loading) return <div className="text-white text-4xl text-center">Loading your settings…</div>;

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        ChaloLetsGo Profit Meter
      </h2>

      <div className={`text-9xl font-black text-center ${color} mb-4`}>
        ₹{Math.round(netProfit)}
      </div>
      <p className="text-2xl text-gray-300 text-center mb-10">
        Your NET earning after everything
      </p>

      <div className="mt-12">
        <p className="text-white text-center text-xl mb-4">
          Your car average: <span className="font-bold text-3xl">{mileage.toFixed(1)} km/l</span>
        </p>
        <input
          type="range"
          min="8" max="22" step="0.1"
          value={mileage}
          onChange={(e) => saveMileage(Number(e.target.value))}
          className="w-full h-4 bg-gray-700 rounded-lg cursor-pointer"
          style={{ background: `linear-gradient(to right, #ef4444 0%, #eab308 ${(mileage-8)*7.14}%, #22c55e ${(mileage-8)*7.14}%, #22c55e 100%)` }}
        />
      </div>

      <p className="text-center text-green-400 mt-8 text-lg">
        Saved automatically ✓
      </p>
    </div>
  );
}