// src/app/admin/page.tsx
export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 p-10">
      <h1 className="text-7xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
        MASTER ADMIN PANEL
      </h1>

      <div className="max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-16 border border-yellow-500/50 shadow-2xl shadow-yellow-500/30">
          <p className="text-4xl text-yellow-400 font-bold mb-8">
            Secret Admin Access Granted
          </p>
          <p className="text-2xl text-gray-300">
            Payout Queue • Bonus Pool • Driver Blocking<br/>
            Everything coming Day 18–20
          </p>
          <div className="text-9xl mt-12 animate-pulse">SOON</div>
        </div>
      </div>
    </div>
  );
}