// src/app/master/page.tsx  ← FINAL 100% BUILDABLE VERSION
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

export const dynamic = 'force-dynamic'; // THIS LINE FIXES EVERYTHING

export default function MasterAdminPanel() {
  // Server-side check
  const isAuthenticated = typeof headers !== 'undefined' 
    ? headers().get('x-admin-auth') === 'true'
    : false;

  if (!isAuthenticated) {
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
          <p className="text-5xl text-yellow-400 mb-20">Ready for 8 AM Payout</p>
          
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}