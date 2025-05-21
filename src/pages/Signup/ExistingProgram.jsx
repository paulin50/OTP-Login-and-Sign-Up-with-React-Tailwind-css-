// import { useLocation, useNavigate } from 'react-router-dom';

// const ExistingProgram = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [hasProgram, setHasProgram] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (hasProgram) {
//       navigate('/signup/program-name');
//     } else {
//       navigate('/signup/program-hosting');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-2">Do you already have a program?</h1>
//         <p className="mb-6 text-gray-600">
//           If you already have an existing program, we'll help you set it up in no time.
//           <br /><br />
//           If you're new to this, let's build your perfect program from scratch.
//         </p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-3 mb-6">
//             <button
//               type="button"
//               onClick={() => setHasProgram(true)}
//               className={`w-full py-3 px-4 border rounded-lg text-left ${hasProgram ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//             >
//               Yes, I do
//             </button>
//             <button
//               type="button"
//               onClick={() => setHasProgram(false)}
//               className={`w-full py-3 px-4 border rounded-lg text-left ${hasProgram === false ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//             >
//               No, I don't
//             </button>
//           </div>
          
//           <button
//             type="submit"
//             disabled={hasProgram === null}
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 mb-4"
//           >
//             Continue
//           </button>
          
//           <button
//             type="button"
//             onClick={() => navigate('/signup/phone')}
//             className="w-full text-blue-600 hover:text-blue-800 py-2"
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ExistingProgram;




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useSignupForm } from '../../hooks/useSignupForm';
// // import logo from '../../assets/supaclass-logo.png';
// import useSignupForm from '../../hooks/useSignupForm';
// import logo from '../../assets/logo.png'

// const ExistingProgram = () => {
//   const navigate = useNavigate();
//   const { updateFormData } = useSignupForm('program');
//   const [hasProgram, setHasProgram] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateFormData({ hasExistingProgram: hasProgram });
//     if (hasProgram) {
//       navigate('/signup/program-name');
//     } else {
//       navigate('/signup/program-hosting');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       {/* Header with logo */}
//       <div className="max-w-xs w-full space-y-8">
//         <img src={logo} alt="Logo" className="h-10 mb-8" />
//       </div>
//         {/* <img src={logo} alt="Supaclass Logo" className="h-8" /> */}

//       {/* Main content */}
//       <main className="flex-grow flex items-center justify-center px-4">
//         <div className="w-full max-w-md">
//           <div className="w-full max-w-md text-left">
//             <h1 className="text-3xl font-bold mb-2">Do you already have a program?</h1>
//             <p className="text-gray-400">
//               If you already have an existing program, we'll help you set it up in no time.
//               <br />
//               If you're new to this, let's build your perfect program from scratch.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-3">
//               <button
//                 type="button"
//                 onClick={() => setHasProgram(true)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border transition-colors ${
//                   hasProgram === true 
//                     ? 'border-blue-500 bg-blue-900 bg-opacity-20' 
//                     : 'border-gray-600 hover:border-gray-500'
//                 }`}
//               >
//                 Yes, I do
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setHasProgram(false)}
//                 className={`w-full py-3 px-4 text-left rounded-lg border transition-colors ${
//                   hasProgram === false 
//                     ? 'border-blue-500 bg-blue-900 bg-opacity-20' 
//                     : 'border-gray-600 hover:border-gray-500'
//                 }`}
//               >
//                 No, I don't
//               </button>
//             </div>

//             <div className="space-y-3">
//               <button
//                 type="submit"
//                 disabled={hasProgram === null}
//                 className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
//                   hasProgram === null 
//                     ? 'bg-gray-700 cursor-not-allowed' 
//                     : 'bg-blue-600 hover:bg-blue-700'
//                 } transition-colors duration-200`}
//               >
//                 Continue
//               </button>

//               <button
//                 type="button"
//                 onClick={() => navigate('/signup/phone')}
//                 className="w-full py-3 px-4 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-colors duration-200"
//               >
//                 Back
//               </button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ExistingProgram;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
// import { useSignupForm } from '../../hooks/useSignupForm';
// import logo from '../../assets/supaclass-logo.png';
import logo from '../../assets/logo.png'

const ExistingProgram = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('existProgram');
  const [hasProgram, setHasProgram] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ hasExistingProgram: hasProgram });
    if (hasProgram) {
      navigate('/signup/program-name');
    } else {
      navigate('/signup/program-hosting');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with logo */}

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <img src={logo} alt="Supaclass Logo" className="h-8" />
          <div className="text-left mb-8"> {/* Changed to text-left */}
            <h1 className="text-2xl font-bold mb-4">Do you already have a program?</h1>
            <p className="text-gray-500 text-xs mb-1">
              If you already have an existing program, we'll help you set it up in no time.
            </p>
            <p className="text-gray-500 text-xs">
              If you're new to this, let's build your perfect program from scratch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Horizontal buttons container */}
            <div className="flex space-x-4"> {/* Changed to flex row with spacing */}
              <button
                type="button"
                onClick={() => setHasProgram(true)}
                className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
                  hasProgram === true 
                    ? 'border-white bg-white text-black'  // Changed to white selection
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                Yes, I do
              </button>
              <button
                type="button"
                onClick={() => setHasProgram(false)}
                className={`flex-1 py-3 px-4 rounded-lg border transition-colors ${
                  hasProgram === false 
                    ? 'border-white bg-white text-black'  // Changed to white selection
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                No, I don't
              </button>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={hasProgram === null}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
                  hasProgram === null 
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-200`}
              >
                Continue
              </button>

              <button
                type="button"
                onClick={() => navigate('/signup/phone')}
                className="w-full py-3 px-4 text-blue-400 hover:text-blue-300 font-medium rounded-lg transition-colors duration-200"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ExistingProgram;