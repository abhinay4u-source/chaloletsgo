// src/app/passenger/LogoutButton.tsx  ← THIS FILE WAS MISSING!
'use client';

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('passenger-auth');
        window.location.href = '/passenger/login';
      }}
      className="fixed bottom-10 right-10 px-16 py-8 text-4xl font-bold text-black bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl shadow-2xl z-50 hover:scale-110 transition-all"
    >
      Logout
    </button>
  );
}