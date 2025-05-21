// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const NameEntry = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/signup/phone', { state: { ...location.state, ...formData } });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-2">What's your name?</h1>
//         <p className="mb-6 text-gray-600">
//           It'll help us personalize your experience and make our interactions more engaging.
//         </p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 mb-4"
//           >
//             Continue
//           </button>
          
//           <button
//             type="button"
//             onClick={() => navigate('/signup/verify')}
//             className="w-full text-blue-600 hover:text-blue-800 py-2"
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NameEntry;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useSignupForm } from '../../hooks/useSignupForm';
// import useSignupForm from '../../hooks/useSignupForm';

// const NameEntry = () => {
//   const navigate = useNavigate();
//   const { formData, updateFormData } = useSignupForm('name');
//   const [name, setName] = useState({
//     firstName: formData.firstName || '',
//     lastName: formData.lastName || ''
//   });

//   const handleChange = (e) => {
//     setName({
//       ...name,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateFormData(name);
//     navigate('/signup/phone');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h1 className="text-3xl font-extrabold text-gray-900">What's your name?</h1>
//           <p className="mt-2 text-sm text-gray-600">
//             It'll help us personalize your experience and make our interactions more engaging.
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-left mb-1">
//                 First name
//               </label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 autoComplete="given-name"
//                 required
//                 value={name.firstName}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Enter your first name"
//               />
//             </div>

//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-left mb-1">
//                 Last name
//               </label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 autoComplete="family-name"
//                 required
//                 value={name.lastName}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col space-y-4">
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//             >
//               Continue
//             </button>

//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//             >
//               Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NameEntry;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
// import { useSignupForm } from '../../hooks/useSignupForm'; // Assuming this path is correct

import logo from '../../assets/logo.png';

const NameEntry = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useSignupForm('name');
  const [name, setName] = useState({
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
  });

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: ensure names are not empty
    if (!name.firstName.trim() || !name.lastName.trim()) {
      // You could add more sophisticated error handling/display here
      alert('Please enter both first and last name.');
      return;
    }
    updateFormData(name);
    console.log('formData check',formData);
    console.log('name form check',name);
    navigate('/signup/phone'); // Navigate to the next step
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-xs w-full space-y-8">  */}
      <div className="max-w-xs w-full space-y-8"> {/* Adjusted max-w-md to max-w-xs for closer match */}
        <img src={logo} alt="Logo" className="h-10 mb-8" />
        
        {/* Logo */}
        {/* <div className="mx-auto mb-8 flex items-center justify-center">
          <div
            className="w-14 h-14 border-[3px] border-white rounded-lg flex items-center justify-center transform rotate-[12deg] bg-transparent"
          >
            Simple S shape, you can replace this with a more accurate SVG if available 
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-white transform -rotate-[12deg]"
            >
              <path d="M17.5 4.5C17.5 4.5 14 4.5 12 7.5S12 13.5 12 13.5M6.5 19.5C6.5 19.5 10 19.5 12 16.5S12 10.5 12 10.5" />
            </svg>
            <img src={logo} alt="Logo" className="h-10 mb-8" />
          </div>
        </div> */}

        <div className="w-full max-w-md text-left">
          <h1 className="text-3xl font-bold text-white"> {/* Adjusted font weight */}
            What's your name?
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            It'll help us personalize your experience and make our interactions more engaging.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}> {/* mt-8 seems fine from image */}
          <div className="space-y-4"> {/* Adjusted spacing between inputs */}
            <div>
              {/* Removed label, using placeholder */}
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={name.firstName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-3 bg-[#1F1F1F] border border-[#333333] placeholder-neutral-500 text-white rounded-lg focus:outline-none focus:ring-0 focus:border-neutral-500 sm:text-sm"
                placeholder="First name"
              />
            </div>

            <div>
              {/* Removed label, using placeholder */}
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={name.lastName}
                onChange={handleChange}
                className="appearance-none relative block w-full px-4 py-3 bg-[#1F1F1F] border border-[#333333] placeholder-neutral-500 text-white rounded-lg focus:outline-none focus:ring-0 focus:border-neutral-500 sm:text-sm"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3 pt-2"> {/* Spacing for buttons */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-[#D1D1D1] hover:bg-neutral-400 focus:outline-none focus:ring-0 transition-colors duration-200"
            >
              Continue
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)} // Go back to the previous page
              className="w-full flex justify-center py-3 px-4 border border-[#333333] text-sm font-medium rounded-lg text-neutral-400 bg-[#1F1F1F] hover:bg-neutral-700 hover:text-neutral-300 focus:outline-none focus:ring-0 transition-colors duration-200"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameEntry;

// Ensure your tailwind.config.js includes 'neutral' colors or replace them
// with 'gray' if you prefer. Specific hex colors like #1F1F1F, #333333, #D1D1D1
// are used for closer matching but can be replaced with Tailwind palette colors
// (e.g., bg-neutral-800, border-neutral-700, bg-neutral-300).