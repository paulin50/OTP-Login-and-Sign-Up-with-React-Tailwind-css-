import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const PersonalDomainCheck = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('hasDomain');

  const handleChoice = (hasDomain) => {
    updateFormData({ hasPersonalDomain: hasDomain });
    if (hasDomain) {
      navigate('/signup/personal-domain'); // replace with actual next step
    } else {
      navigate('/signup/no-worries'); // replace with actual next step
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />

        <h1 className="text-2xl font-semibold mb-3">
          Do you already have a personal domain to host your program?
        </h1>

        <p className="text-gray-400 text-sm mb-8">
          If you own a personal domain for your program, select ‘Yes’ to connect it with Supaclass.
          If not, we’ll set up hosting for you with ease.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 py-3 px-4 bg-white text-black font-medium rounded-lg transition-colors duration-200"
          >
            Yes, I do
          </button>

          <button
            onClick={() => handleChoice(false)}
            className="flex-1 py-3 px-4 border border-gray-600 text-gray-300 hover:text-white rounded-lg transition duration-200"
          >
            No, I don’t
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDomainCheck;
