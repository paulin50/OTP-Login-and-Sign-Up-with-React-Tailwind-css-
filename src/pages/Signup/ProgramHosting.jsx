import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const ProgramHosting = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, getAllFormData } = useSignupForm('hostingPlatform');
  const [hostingPlatform, setHostingPlatform] = useState(formData.hostingPlatform || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ hostingPlatform });
    const allData = getAllFormData();
    console.log('getAllFormData check for Pr', allData);
    navigate('/signup/personal-domain-check'); // replace with actual next route
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-4xl mb-6">
            <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />
          {/* <span className="inline-block bg-white text-black rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M4.5 7.5h15m-13.5 3h12m-10.5 3h9m-7.5 3h6M5.25 21h13.5"
              />
            </svg>
          </span> */}
        </div>
        <h1 className="text-2xl font-semibold mb-2">Where is your program currently hosted?</h1>
        <p className="text-gray-400 mb-5 text-sm">
          Share the website or platform where your program is currently hosted. This helps us integrate it seamlessly with Supaclass for a smoother experience.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={hostingPlatform}
            onChange={(e) => setHostingPlatform(e.target.value)}
            placeholder="www.website.com"
            className="w-full border border-gray-600 rounded-md bg-transparent text-white py-3 px-4 focus:outline-none focus:border-white"
            required
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-white text-black font-medium rounded-lg transition-colors duration-200"
          >
            Continue
          </button>

          <button
            type="button"
            onClick={() => navigate('/signup/program')}
            className="w-full py-3 px-4 border border-gray-600 text-gray-300 hover:text-white rounded-lg transition duration-200"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProgramHosting;
