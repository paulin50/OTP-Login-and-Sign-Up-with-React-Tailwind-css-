// src/LoginDashboard.js (or wherever you keep your components)
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Access the email passed via route state
  // Provide a fallback in case state or email is undefined
  const email = location.state?.email || 'User'; 

  const handleLogout = () => {
    // Navigate back to the login page
    // In a real app, you'd also clear any auth tokens/session state
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Welcome, you are logged in!</h1>
        <p className="text-xl text-neutral-300">
          Email: <span className="font-medium text-white">{email}</span>
        </p>
        <button
          onClick={handleLogout}
          className="mt-8 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default LoginDashboard;