import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OTPInput from '../../components/OTPInput';
import { verifyEmailOTP } from '../../services/auth';

const EmailVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  
  const { email } = location.state || {};

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await verifyEmailOTP(email, otp.join(''));
      navigate('/signup/name', { state: { email } });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Verification code</h1>
        <p className="mb-6 text-gray-600">
          We sent a verification code to <strong>{email}</strong>
        </p>
        
        <form onSubmit={handleVerify}>
          <div className="mb-6">
            <OTPInput otp={otp} setOtp={setOtp} />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || otp.some(digit => !digit)}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 mb-4"
          >
            {isLoading ? 'Verifying...' : 'Continue'}
          </button>
          
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="w-full text-blue-600 hover:text-blue-800 py-2"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;