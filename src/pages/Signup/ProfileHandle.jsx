import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const ProfileHandle = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('profileHandle');
  const [handle, setHandle] = useState('');

  const handleContinue = () => {
    if (handle.trim() === '') return;

    updateFormData({ handle });
    navigate('/signup/profile-picture'); // Replace with your actual route
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-6" />

        <h1 className="text-2xl font-semibold mb-2">
          Choose your unique handle
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Pick a unique handle for your Supaclass profile.
          This will be your personal public URL, making it easy to share and access.
        </p>

        <div className="flex items-center mb-6 border border-gray-700 rounded">
          <span className="bg-gray-800 px-3 py-2 text-gray-400 rounded-l select-none">
            supaclass.com/@
          </span>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="yourname"
            className="flex-1 bg-black px-3 py-2 text-white outline-none"
          />
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-3 bg-white text-black font-medium rounded mb-3 hover:bg-gray-200"
        >
          Continue
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full py-3 border border-gray-600 text-gray-300 hover:text-white rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProfileHandle;
