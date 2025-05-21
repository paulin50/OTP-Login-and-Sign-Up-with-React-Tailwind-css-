// import { useState } from 'react';
// import countries from './countries.json'; // Create this file with country codes

// const CountryDropdown = ({ selectedCountry, setSelectedCountry }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         className="flex items-center justify-between w-full px-4 py-3 border rounded-lg"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{selectedCountry ? `${selectedCountry.code} ${selectedCountry.name}` : 'Select country'}</span>
//         <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
      
//       {isOpen && (
//         <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
//           {countries.map((country) => (
//             <div
//               key={country.code}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => {
//                 setSelectedCountry(country);
//                 setIsOpen(false);
//               }}
//             >
//               {country.code} {country.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountryDropdown;


import { useState, useEffect, useRef } from 'react';
import countries from './countries.json';

const CountryDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const sortedCountries = [...countries].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  const filteredCountries = sortedCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-3 border rounded-lg bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">
          {selectedCountry ? `${selectedCountry.code} ${selectedCountry.name}` : 'Select country'}
        </span>
        <svg 
          className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-96 overflow-hidden">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <div className="overflow-y-auto max-h-80">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={`${country.code}-${country.name}`}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <span className="w-12 font-medium">{country.code}</span>
                  <span>{country.name}</span>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;