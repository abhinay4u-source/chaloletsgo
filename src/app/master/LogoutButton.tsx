// src/app/master/LogoutButton.tsx
'use client';
export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('admin-auth');
        window.location.href = '/master/login';
      }}
      className="px-32 py-12 text-5xl font-bold text-black bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl hover:scale-110 transition-all shadow-2xl"
    >
      Logout Emperor
    </button>
  );
}