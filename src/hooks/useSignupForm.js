// // src/hooks/useSignupForm.js
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const useSignupForm = (formKey) => {
//   const location = useLocation();
//   const [formData, setFormData] = useState(() => {
//     const savedData = localStorage.getItem(`signup-${formKey}`);
//     return savedData ? JSON.parse(savedData) : (location.state || {});
//   });

//   useEffect(() => {
//     localStorage.setItem(`signup-${formKey}`, JSON.stringify(formData));
//   }, [formData, formKey]);

//   const updateFormData = (newData) => {
//     setFormData(prev => ({ ...prev, ...newData }));
//   };

//   return { formData, updateFormData };
// };

// export default useSignupForm;


import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSignupForm = (formKey) => {
  const location = useLocation();
  
  // Get all stored form data from localStorage
  const getAllFormData = () => {
    const formKeys = ['email', 'name', 'phone', 'country', 'program', 'team', 'existProgram',
        'hostingPlatform', 'hasDomain', 'domain', 'personalDomain', 'createdDomain', 'profileHandle', 'profilePicture', 'plan'];
    const allData = {};
    
    formKeys.forEach(key => {
      const data = localStorage.getItem(`signup-${key}`);
      if (data) {
        allData[key] = JSON.parse(data);
      }
    });

    return { ...allData, ...(location.state || {}) };
  };

  // Original functionality (for backward compatibility)
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(`signup-${formKey}`);
    return savedData ? JSON.parse(savedData) : (location.state || {});
  });

  // Enhanced update function
  const updateFormData = (newData, key = formKey) => {
    const updatedData = { ...formData, ...newData };
    localStorage.setItem(`signup-${key}`, JSON.stringify(newData));
    setFormData(updatedData);
    return updatedData;
  };

  // Clear specific form key or all data
  const clearFormData = (key = formKey) => {
    if (key === 'all') {
      ['email', 'name', 'phone', 'country', 'program', 'team'].forEach(k => {
        localStorage.removeItem(`signup-${k}`);
      });
      setFormData({});
    } else {
      localStorage.removeItem(`signup-${key}`);
      setFormData(prev => {
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  return { 
    formData, 
    updateFormData,
    clearFormData,
    getAllFormData // New function to get all collected data
  };
};

export default useSignupForm;