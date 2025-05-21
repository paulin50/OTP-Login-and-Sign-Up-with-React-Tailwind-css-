import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const PersonalDomain = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('personalDomain');
  const [domain, setDomain] = useState('');

  const handleContinue = () => {
    if (!domain.trim()) return; // Prevent blank submits
    updateFormData({ personalDomain: domain });
    navigate('/signup/team-invite'); // Replace with your actual route
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-6" />

        <h1 className="text-2xl font-semibold mb-2 leading-snug">
          What is your personal domain name / Where should your program be hosted?
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Enter your personal domain name to host your program.
        </p>

        <input
          type="text"
          placeholder="website.com, website.co, website.io, website.ai..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full px-4 py-3 bg-[#181818] border border-gray-700 rounded-md placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white mb-2"
        />

        <p className="text-xs text-gray-500 mb-6">
          ℹ️ It can be your current personal domain or the one mentioned earlier.
        </p>

        <button
          onClick={handleContinue}
          className="w-full py-3 bg-gray-200 text-black font-medium rounded-md hover:bg-white transition duration-200 mb-3"
        >
          Continue
        </button>

        <button
          onClick={() => navigate('/signup/personal-domain-check')}
          className="w-full py-3 border border-gray-600 text-gray-300 hover:text-white rounded-md transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PersonalDomain;
