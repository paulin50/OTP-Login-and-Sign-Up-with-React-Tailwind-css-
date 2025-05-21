import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const ProfilePicture = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('profilePicture');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleContinue = () => {
    updateFormData({ profileImage: image || null });
    navigate('/signup/plan-selection'); // Replace with your next step
  };

  const handleSkip = () => {
    updateFormData({ profileImage: null });
    navigate('/signup/plan-selection'); // Replace with your next step
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      
      <div className="max-w-md w-full">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />

        <h1 className="text-2xl font-semibold mb-2">Set your profile picture</h1>

        <p className="text-sm text-gray-400 mb-6">
          Add a profile picture to personalize your Supaclass account. Upload an image that represents you.
        </p>
      </div>
      
      <div className="max-w-md w-full text-center">

        <div className="mb-4">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-20 h-20 rounded-full mx-auto object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-red-700 text-white flex items-center justify-center mx-auto text-xl font-bold">
              RG
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          id="upload"
          onChange={handleImageUpload}
          hidden
        />
        <label
          htmlFor="upload"
          className="cursor-pointer text-sm bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
        >
          Upload image
        </label>

        <div className="mt-8">
          <button
            onClick={handleContinue}
            className="w-full py-3 bg-white text-black font-medium rounded mb-3 hover:bg-gray-200"
          >
            Continue
          </button>

          <button
            onClick={handleSkip}
            className="w-full py-3 border border-gray-600 text-gray-300 hover:text-white rounded"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
