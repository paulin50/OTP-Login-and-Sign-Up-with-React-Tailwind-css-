// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ProgramName = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [programName, setProgramName] = useState('Untitled Program');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/signup/program-hosting', { 
//       state: { ...location.state, programName } 
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-2">What's the name of your program?</h1>
//         <p className="mb-6 text-gray-600">
//           Enter the name of your existing program to set it up on Supaclass. This will help us organize your experience.
//         </p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <input
//               type="text"
//               value={programName}
//               onChange={(e) => setProgramName(e.target.value)}
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
//             onClick={() => navigate('/signup/existing-program')}
//             className="w-full text-blue-600 hover:text-blue-800 py-2"
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProgramName;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useSignupForm } from '../../hooks/useSignupForm';
// import useSignupForm from '../../hooks/useSignupForm';
// // import logo from '../../assets/supaclass-logo.png';
// import logo from '../../assets/logo.png'

// const ProgramName = () => {
//   const navigate = useNavigate();
//   const { formData, updateFormData } = useSignupForm('program');
//   const [programName, setProgramName] = useState(formData.programName || 'Untitled Program');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateFormData({ programName });
//     navigate('/signup/program-hosting');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       {/* Header with logo */}

//       {/* Main content */}
//       <main className="flex-grow flex items-center justify-center px-4">
//         <div className="w-full max-w-md">
//           <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />
//           <div className="text-left mb-8">
//             <h1 className="text-2xl font-bold mb-4">What's the name of your program?</h1>
//             <p className="text-gray-400 text-sm">
//               Enter the name of your existing program to set it up on Supaclass. This will help us organize your experience.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="mb-6">
//               <div className="flex items-center mb-1">
//                 <span className="text-gray-400 mr-2">UP</span>
//                 <input
//                   type="text"
//                   value={programName}
//                   onChange={(e) => setProgramName(e.target.value)}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//               >
//                 Continue
//               </button>

//               <button
//                 type="button"
//                 onClick={() => navigate('/signup/existing-program')}
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

// export default ProgramName;



// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useSignupForm from '../../hooks/useSignupForm';
// import logo from '../../assets/logo.png';

// const ProgramName = () => {
//   const navigate = useNavigate();
//   const { formData, updateFormData } = useSignupForm('program');
//   const [programName, setProgramName] = useState(formData.programName || 'Untitled Program');
//   const [initials, setInitials] = useState('UP');

//   useEffect(() => {
//     // Generate initials from program name
//     if (programName && programName !== 'Untitled Program') {
//       const words = programName.trim().split(/\s+/);
//       let newInitials = '';
      
//       if (words.length === 1) {
//         newInitials = words[0].charAt(0).toUpperCase();
//       } else {
//         newInitials = words.map(word => word.charAt(0).toUpperCase()).join('');
//       }
      
//       setInitials(newInitials.slice(0, 2)); // Take max 2 initials
//     } else {
//       setInitials('UP'); // Default value
//     }
//   }, [programName]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateFormData({ programName });
//     navigate('/signup/program-hosting');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <main className="flex-grow flex items-center justify-center px-4">
//         <div className="w-full max-w-md">
//           <img src={logo} alt="Supaclass Logo" className="h-8 mb-6" />
          
//           <div className="text-left mb-8">
//             <h1 className="text-2xl font-bold mb-4">What's the name of your program?</h1>
//             <p className="text-gray-400 text-sm">
//               Enter the name of your existing program to set it up on Supaclass. This will help us organize your experience.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="flex flex-col space-y-2 mb-6">
//               <span className="text-gray-400 text-sm">Initials</span>
//               <div className="flex items-center">
//                 <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-800 text-gray-300 mr-3 border border-gray-700">
//                   {initials}
//                 </div>
//                 <input
//                   type="text"
//                   value={programName}
//                   onChange={(e) => setProgramName(e.target.value)}
//                   className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
//               >
//                 Continue
//               </button>

//               <button
//                 type="button"
//                 onClick={() => navigate('/signup/existing-program')}
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

// export default ProgramName;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const ProgramName = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, getAllFormData } = useSignupForm('program');
  const [programName, setProgramName] = useState(formData.programName || 'Untitled Program');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ programName });
    navigate('/signup/program-hosting');
    // const allData = getAllFormData();
    // console.log('getAllFormData check for Pr', allData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />

          <h1 className="text-2xl font-semibold mb-2">What’s the name of your program?</h1>
          <p className="text-gray-400 mb-5 text-xs">
            Enter the name of your existing program to set it up on Supaclass. This will help us organize your experience.
          </p>

          {/* Visual: Red "UP" badge */}
          <div className="w-12 h-12 mx-auto mb-2 bg-red-700 text-white rounded-md flex items-center justify-center font-semibold text-lg">
            {(() => {
              const words = programName.trim().split(' ').filter(Boolean);
              if (words.length === 1) return words[0].charAt(0).toUpperCase();
              if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
              return 'UP';
            })()}
          </div>

          {/* <p className="text-sm text-gray-300 mb-8">{programName || 'Untitled Program'}</p> */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              placeholder="Enter program name"
              className="w-full border-b border-gray-600 bg-transparent text-white py-3 px-2 focus:outline-none focus:border-white text-center text-lg"
              required
            />

            <div className="space-y-3 pt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-black font-medium rounded-lg transition-colors duration-200"
              >
                Continue
              </button>

              <button
                type="button"
                onClick={() => navigate('/signup/existing-program')}
                className="w-full py-3 px-4 border border-gray-600 text-gray-300 hover:text-white rounded-lg transition duration-200"
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

export default ProgramName;

