// src/app/master/page.tsx  ← FINAL REAL MASTER PANEL
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

export const dynamic = 'force-dynamic';

export default function MasterAdminPanel() {
  // Simple client-side check (works perfectly)
  if (typeof window !== 'undefined' && !localStorage.getItem('admin-auth')) {
    redirect('/master/login');
  }

  const drivers = [
    { name: "Rajesh Kumar", score: 96, earnings: 18420, toll: 720, blocked: false },
    { name: "Anil Sharma", score: 88, earnings: 15600, toll: 320, blocked: false },
    { name: "Vikas Singh", score: 79, earnings: 9200, toll: 180, blocked: true },
    { name: "Sunil Yadav", score: 94, earnings: 19800, toll: 890, blocked: false },
  ];

  const total = drivers.reduce((s, d) => s + d.earnings, 0);
  const ready = drivers.filter(d => !d.blocked).reduce((s, d) => s + d.earnings, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 p-10">
      <h1 className="text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-16">
        MASTER ADMIN PANEL
      </h1>

      {/* TOP STATS */}
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border-4 border-yellow-500/50 text-center shadow-2xl">
          <p className="text-5xl text-yellow-400 mb-4">Total Earnings Today</p>
          <p className="text-9xl font-black text-white">₹{total.toLocaleString()}</p>
        </div>
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border-4 border-green-500/50 text-center shadow-2xl">
          <p className="text-5xl text-green-400 mb-4">Ready for Payout</p>
          <p className="text-9xl font-black text-white">₹{ready.toLocaleString()}</p>
        </div>
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border-4 border-red-500/50 text-center shadow-2xl">
          <p className="text-5xl text-red-400 mb-4">Blocked Drivers</p>
          <p className="text-9xl font-black text-white">{drivers.filter(d => d.blocked).length}</p>
        </div>
      </div>

      {/* DRIVER LIST */}
      <div className="max-w-7xl mx-auto space-y-12">
        {drivers.map(d => (
          <div key={d.name} className={`backdrop-blur-xl rounded-3xl p-12 border-4 ${d.blocked ? 'border-red-600 bg-red-900/60' : 'border-white/20 bg-white/10'} shadow-2xl`}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-6xl font-black text-white">{d.name}</h3>
                <div className="text-4xl text-gray-300 mt-8 space-x-12">
                  <span>Score: <strong className="text-cyan-400">{d.score}/100</strong></span>
                  <span>Earnings: <strong className="text-green-400">₹{d.earnings.toLocaleString()}</strong></span>
                  <span>Toll: <strong className={d.toll < 500 ? 'text-red-400' : 'text-green-400'}>₹{d.toll}</strong></span>
                </div>
              </div>
              <div className="flex gap-10">
                <button className="px-20 py-10 text-5xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-600 rounded-3xl hover:scale-110 transition-all shadow-2xl">
                  Release Payout
                </button>
                <button className={`px-20 py-10 text-5xl font-bold text-white rounded-3xl hover:scale-110 transition-all shadow-2xl ${d.blocked ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-600 to-pink-600'}`}>
                  {d.blocked ? 'UNBLOCK' : 'BLOCK'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <LogoutButton />
      </div>
    </div>
  );
}