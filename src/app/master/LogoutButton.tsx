// src/app/master/LogoutButton.tsx  ← CLIENT COMPONENT FOR BUTTON
'use client';

export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    window.location.href = '/master/login';
  };

  return (
    <button
      onClick={handleLogout}
      className="px-20 py-10 text-4xl font-bold text-black bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl hover:scale-110 transition-all shadow-2xl"
    >
      Logout Emperor
    </button>
  );
}