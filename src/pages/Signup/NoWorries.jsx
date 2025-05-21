import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const NoWorries = () => {
  const navigate = useNavigate();
  const { formData } = useSignupForm('nohasDomain');

  const handleContinue = () => {
    // updateFormData({ noHasDomain: noHasDomain });
    navigate('/signup/created-domain'); // Replace with your actual next route
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />

        <h1 className="text-2xl font-semibold mb-2">
          No worries{formData?.fullName ? `, ${formData.fullName.split(' ')[0]}` : ''}
        </h1>

        <p className="text-sm text-gray-400 mb-5">
          We’ll help you set up hosting for your program with a custom domain.
          Let’s get started and make it yours in just a few steps.
        </p>

        <button
          onClick={handleContinue}
          className="w-full py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition duration-200 mb-3"
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

export default NoWorries;
