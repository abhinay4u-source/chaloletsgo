// src/app/passenger/page.tsx  ← FINAL PASSENGER PORTAL!
import PassengerBooking from '@/components/PassengerBooking';

export default function PassengerPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 p-8">
      <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-16">
        Passenger Portal
      </h1>

      <div className="max-w-5xl mx-auto">
        <PassengerBooking />
      </div>

      <p className="text-center text-green-400 mt-20 text-4xl font-bold">
        Welcome to India's Fairest Cab
      </p>
    </div>
  );
}