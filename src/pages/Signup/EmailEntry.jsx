// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaGoogle } from 'react-icons/fa';
// import { sendVerificationEmail } from '../../services/auth';

// const EmailEntry = () => {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await sendVerificationEmail(email);
//       navigate('/signup/verify', { state: { email } });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
//       <div className="bg-gray-800 rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6">Create an account</h1>
        
//         <div className="mb-6">
//           <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-50">
//             <FaGoogle className="text-blue-500" />
//             Continue with Google
//           </button>
//         </div>
        
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
//           >
//             {isLoading ? 'Sending...' : 'Continue'}
//           </button>
//         </form>
        
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 hover:underline">Log in</a>
//         </p>
        
//         <p className="mt-8 text-xs text-gray-500 text-center">
//           By signing up to Supaclass, you acknowledge that you have read and agree to our Terms of Service and Privacy Policy.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EmailEntry;


// import React from "react";
// // import '../../assets/lo'
// import logo from '../../assets/logo.png'

// export default function EmailEntry() {

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await sendVerificationEmail(email);
//       navigate('/signup/verify', { state: { email } });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center">
//       <div className="w-full max-w-md text-left pl-16">
//         <img src={logo} alt="Logo" className="h-10 mb-8" />
//         <h1 className="text-2xl font-semibold mb-2">Create an account</h1>
//         <p className="text-sm text-gray-400 mb-6">
//           Already have an account? <a href="#" className="underline">Log Into Supaclass</a>
//         </p>

//         <input
//           type="email"
//           placeholder="rasheed@goudedji.com"
//           className="w-full p-3 rounded-md bg-black border border-white text-white mb-4 focus:outline-none"
//         />

//         <button className="w-full p-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 mb-6">
//           Sign up
//         </button>

//         <div className="flex items-center justify-start space-x-4 mb-6">
//           <div className="h-px flex-1 bg-gray-600" />
//           <span className="text-gray-400 text-sm">or</span>
//           <div className="h-px flex-1 bg-gray-600" />
//         </div>

//         <div className="flex space-x-4">
//           <button className="flex-1 flex items-center justify-center border border-gray-500  rounded-md hover:bg-gray-800">
//             <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="mr-1" alt="Google icon" />
//             Continue with Google
//           </button>

//           <button className="flex-1 flex items-center border border-gray-500 p-1 rounded-md hover:bg-gray-800">
//             <img src="https://img.icons8.com/ios-filled/16/ffffff/mac-os.png" className="mr-1" alt="Apple icon" />
//             Continue with Apple
//           </button>
//         </div>

//         <p className="text-xs text-gray-500 mt-6">
//           By signing up to Supaclass, you acknowledge that you have read and agree to
//           <a href="#" className="underline ml-1">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
//         </p>
//       </div>
//     </div>
//   );
// }



// export default EmailEntry;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendVerificationEmail } from "../../services/auth";
import logo from '../../assets/logo.png'

export default function EmailEntry() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendVerificationEmail(email);
      navigate("/signup/opt-input", { state: { email } });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md text-left pl-16">
        <img src={logo} alt="Logo" className="h-10 mb-8" />
        <h1 className="text-2xl font-semibold mb-2">Create an account</h1>
        <p className="text-sm text-gray-400 mb-6">
          Already have an account? <a href="#" className="underline">Log Into Supaclass</a>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rasheed@goudedji.com"
            className="w-full p-3 rounded-md bg-black border border-white text-white mb-4 focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 mb-6 disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Sign up"}
          </button>
        </form>

        <div className="flex items-center justify-start space-x-4 mb-6">
          <div className="h-px flex-1 bg-gray-600" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px flex-1 bg-gray-600" />
        </div>

        <div className="flex gap-4 w-full">
          <div className="flex flex-1 items-center justify-center border border-gray-500  rounded-md hover:bg-gray-800">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="mr-1" alt="Google icon" />
            <span>Continue with Google</span>
          </div>
          <div className="flex flex-1 items-center justify-center border border-gray-500 p-1 rounded-md hover:bg-gray-800">
            <img src="https://img.icons8.com/ios-filled/16/ffffff/mac-os.png" className="mr-1" alt="Apple icon" />
            <span>Continue with Apple</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          By signing up to Supaclass, you acknowledge that you have read and agree to
          <a href="#" className="underline ml-1">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
