// src/app/passenger/page.tsx  ← PROTECTED PORTAL
import PassengerBooking from '@/components/PassengerBooking';

export default function PassengerPortal() {
  // Check if logged in
  if (typeof window !== 'undefined') {
    const auth = localStorage.getItem('passenger-auth');
    if (!auth) {
      window.location.href = '/passenger/login';
      return null;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 p-8">
      <h1 className="text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 mb-16">
        Passenger Portal
      </h1>

      <div className="max-w-5xl mx-auto">
        <PassengerBooking />
      </div>

      <button
        onClick={() => {
          localStorage.removeItem('passenger-auth');
          window.location.href = '/passenger/login';
        }}
        className="fixed bottom-10 right-10 px-12 py-6 text-3xl font-bold text-black bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl shadow-2xl"
      >
        Logout
      </button>
    </div>
  );
}