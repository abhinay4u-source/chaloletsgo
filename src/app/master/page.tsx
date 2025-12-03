// src/app/master/page.tsx  ← PROTECTED MASTER PANEL
import { redirect } from 'next/navigation';

export default function MasterAdminPanel() {
  // Check if logged in
  if (typeof window !== 'undefined' && !localStorage.getItem('admin-auth')) {
    redirect('/master/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 p-10">
      <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-16">
        MASTER ADMIN PANEL
      </h1>

      <div className="max-w-7xl mx-auto text-center">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-20 border-8 border-yellow-500/50 shadow-2xl">
          <p className="text-6xl text-green-400 mb-10">EMPEROR AUTHENTICATED</p>
          <p className="text-8xl font-black text-white mb-10">₹1,84,000</p>
          <p className="text-5xl text-yellow-400">Ready for 8 AM Payout</p>
          <button 
            onClick={() => {
              localStorage.removeItem('admin-auth');
              window.location.href = '/master/login';
            }}
            className="mt-20 px-20 py-10 text-4xl font-bold text-black bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl"
          >
            Logout Emperor
          </button>
        </div>
      </div>
    </div>
  );
}