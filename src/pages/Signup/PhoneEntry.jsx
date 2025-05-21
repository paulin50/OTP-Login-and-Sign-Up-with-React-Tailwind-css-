// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import CountryDropdown from '../../components/CountryDropdown';

// const PhoneEntry = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [country, setCountry] = useState(null);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/signup/existing-program', { 
//       state: { 
//         ...location.state, 
//         phone: `${country?.code}${phoneNumber}` 
//       } 
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-2">What's your phone number?</h1>
//         <p className="mb-6 text-gray-600">
//           This information will be utilized to authenticate your account and grant access to features such as direct messaging.
//         </p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Country code</label>
//             <CountryDropdown selectedCountry={country} setSelectedCountry={setCountry} />
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
//             <input
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             disabled={!country || !phoneNumber}
//             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 mb-4"
//           >
//             Continue
//           </button>
          
//           <button
//             type="button"
//             onClick={() => navigate('/signup/name')}
//             className="w-full text-blue-600 hover:text-blue-800 py-2"
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PhoneEntry;



// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useSignupForm from '../../hooks/useSignupForm';
// // import { useSignupForm } from '../../hooks/useSignupForm'; // Adjust path if needed
// // import { countriesData } from '../../data/countries'; // Adjust path if needed
// import { countriesData } from '../../data/countries';

// const PhoneEntry = () => {
//   const navigate = useNavigate();
//   const { formData, updateFormData } = useSignupForm('phone'); // Unique key for this form step

//   const [selectedCountry, setSelectedCountry] = useState(
//     formData.country || countriesData.find(c => c.code === 'US') || countriesData[0]
//   );
//   const [phoneNumber, setPhoneNumber] = useState(formData.number || '');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setIsDropdownOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!phoneNumber.trim() || !/^\d{7,15}$/.test(phoneNumber.trim())) {
//         alert('Please enter a valid phone number (7-15 digits).');
//         return;
//     }
//     updateFormData({ country: selectedCountry, number: phoneNumber });
//     navigate('/signup/verify'); // Or your next step, e.g., '/signup/verify-phone'
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
//       <div className="max-w-xs w-full space-y-8">
//         {/* Logo */}
//         <div className="mx-auto mb-8 flex items-center justify-center">
//           <div className="w-14 h-14 border-[3px] border-white rounded-lg flex items-center justify-center transform rotate-[12deg] bg-transparent">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-7 h-7 text-white transform -rotate-[12deg]"
//             >
//               <path d="M17.5 4.5C17.5 4.5 14 4.5 12 7.5S12 13.5 12 13.5M6.5 19.5C6.5 19.5 10 19.5 12 16.5S12 10.5 12 10.5" />
//             </svg>
//           </div>
//         </div>

//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-white">
//             What's your phone number?
//           </h1>
//           <p className="mt-2 text-sm text-neutral-400 px-2">
//             This information will be utilized to authenticate your account and grant access to features such as direct messaging.
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="relative">
//             <div className="flex">
//               {/* Country Code Selector Button */}
//               <button
//                 ref={buttonRef}
//                 type="button"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center justify-center w-auto px-3 py-3 bg-[#1F1F1F] border border-r-0 border-[#333333] text-white rounded-l-lg focus:outline-none focus:border-neutral-500 text-sm"
//               >
//                 <span className="mr-2 text-lg">{selectedCountry.flag}</span>
//                 <span>{selectedCountry.dial_code}</span>
//               </button>

//               {/* Phone Number Input */}
//               <input
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 type="tel"
//                 autoComplete="tel-national"
//                 required
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} // Allow only digits
//                 className="appearance-none relative block w-full px-4 py-3 bg-[#1F1F1F] border border-[#333333] placeholder-neutral-500 text-white rounded-r-lg focus:outline-none focus:ring-0 focus:border-neutral-500 sm:text-sm"
//                 placeholder="Phone number"
//               />
//             </div>

//             {/* Country Code Dropdown */}
//             {isDropdownOpen && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-[#1A1A1A] border border-[#333333] rounded-lg shadow-lg py-1"
//                 style={{ top: '100%' }} // Position dropdown below the input group
//               >
//                 {countriesData.map((country) => (
//                   <div
//                     key={country.code}
//                     onClick={() => handleCountrySelect(country)}
//                     className="flex items-center px-4 py-2.5 text-sm text-neutral-300 hover:bg-[#2F2F2F] cursor-pointer"
//                   >
//                     <span className="mr-3 text-lg">{country.flag}</span>
//                     <span className="mr-3 font-medium">{country.dial_code}</span>
//                     <span className="flex-grow text-left">{country.name}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex flex-col space-y-3 pt-2">
//             <button
//               type="submit"
//               className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-[#D1D1D1] hover:bg-neutral-400 focus:outline-none focus:ring-0 transition-colors duration-200"
//             >
//               Continue
//             </button>

//             <button
//               type="button"
//               onClick={() => navigate(-1)} // Go back to the previous page
//               className="w-full flex justify-center py-3 px-4 border border-[#333333] text-sm font-medium rounded-lg text-neutral-400 bg-[#1F1F1F] hover:bg-neutral-700 hover:text-neutral-300 focus:outline-none focus:ring-0 transition-colors duration-200"
//             >
//               Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PhoneEntry;




import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
// import { useSignupForm } from '../../hooks/useSignupForm'; // Adjust path if needed
import { countriesData } from '../../data/countries'; // Adjust path if needed
// import { countriesData } from '../../data/countries';
import logo from '../../assets/logo.png';

const PhoneEntry = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, getAllFormData } = useSignupForm('phone');

  // const { formData, updateFormData } = useSignupForm('phone');

  const defaultCountry = formData.country || countriesData.find(c => c.code === 'US') || countriesData[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState(formData.number || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const countryButtonRef = useRef(null); // Ref for the country selector button

  useEffect(() => {
    // Load initial data from storage if available
    if (formData.country) setSelectedCountry(formData.country);
    if (formData.number) setPhoneNumber(formData.number);
  }, [formData]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        countryButtonRef.current && // Check if the click was outside the button too
        !countryButtonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber.trim() || !/^\d{7,15}$/.test(phoneNumber.trim())) {
      alert('Please enter a valid phone number (7-15 digits).');
      return;
    }
    console.log('phoneNumber check', phoneNumber);
    console.log('selectedCountry', selectedCountry);
    updateFormData({ 
    phone: `${selectedCountry.code}${phoneNumber}`,
    country: selectedCountry 
  }, 'phone');
  const allData = getAllFormData();
  console.log('getAllFormData check', allData);
    navigate('/signup/existing-program'); // Or your next step
  };

  // const { firstName, lastName } = getAllFormData().name || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <img src={logo} alt="Logo" className="h-10 mb-8" />

        <div className="w-full max-w-md text-left">
          <h1 className="text-2xl font-bold text-white">
            What's your phone number?
          </h1>
          <p className="mt-2 text-sm text-neutral-400 px-1">
            This information will be utilized to authenticate your account and grant access to features such as direct messaging.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            {/* Container for the combined input */}
            <div className="flex items-stretch bg-[#1F1F1F] border border-[#333333] rounded-lg overflow-hidden focus-within:border-neutral-500 transition-colors duration-150">
              {/* Country Code Selector Button */}
              <button
                ref={countryButtonRef} // Assign ref here
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-auto px-3 py-3 bg-transparent text-white focus:outline-none text-sm border-r border-[#333333]"
              >
                <span className="mr-2 text-lg">{selectedCountry.flag}</span>
                <span>{selectedCountry.dial_code}</span>
              </button>

              {/* Phone Number Input */}
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel" // Use "tel" for semantic phone number input
                autoComplete="tel-national"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                className="appearance-none relative block w-full px-4 py-3 bg-transparent placeholder-neutral-500 text-white focus:outline-none sm:text-sm"
                placeholder="Phone number"
              />
            </div>

            {/* Country Code Dropdown */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute z-20 mt-1 w-full max-h-60 overflow-y-auto bg-[#1A1A1A] border border-[#333333] rounded-lg shadow-lg py-1"
                style={{ top: '100%' }}
              >
                {countriesData.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className="flex items-center px-4 py-2.5 text-sm text-neutral-300 hover:bg-[#2F2F2F] cursor-pointer"
                  >
                    <span className="mr-3 text-lg">{country.flag}</span>
                    <span className="mr-3 font-medium">{country.dial_code}</span>
                    <span className="flex-grow text-left">{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-[#D1D1D1] hover:bg-neutral-400 focus:outline-none focus:ring-0 transition-colors duration-200"
            >
              Continue
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
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

export default PhoneEntry;