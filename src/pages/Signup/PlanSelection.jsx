// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useSignupForm from '../../hooks/useSignupForm';
// import logo from '../../assets/logo.png';

// const plans = [
//   {
//     name: 'Professional',
//     price: 149,
//     features: ['Unlimited courses', 'Unlimited courses', 'Unlimited courses', 'Unlimited courses']
//   },
//   {
//     name: 'Organization',
//     price: 299,
//     features: ['Unlimited courses', 'Unlimited courses', 'Unlimited courses', 'Unlimited courses']
//   }
// ];

// const SelectPlan = () => {
//   const { updateFormData } = useSignupForm('plan');
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState('Professional');
//   const [billing, setBilling] = useState('Monthly');

//   const handleContinue = () => {
//     updateFormData({
//       selectedPlan,
//       billingCycle: billing
//     });
//     navigate('/signup/review'); // Replace with your next step
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
//       <div className="max-w-2xl w-full text-center">
//         <img src={logo} alt="Supaclass Logo" className="h-8 mb-6 mx-auto" />
//         <h1 className="text-2xl font-semibold mb-2">Which plan would you like to start with?</h1>
//         <p className="text-sm text-gray-400 mb-6">
//           Lorem ipsum dolor sit amet consectetur. Sed quis aenean posuere ipsum eu urna netus sed sagittis.
//         </p>

//         <div className="flex justify-center mb-8">
//           <button
//             onClick={() => setBilling('Monthly')}
//             className={`px-4 py-2 rounded-l ${billing === 'Monthly' ? 'bg-white text-black' : 'bg-gray-800'}`}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => setBilling('Yearly')}
//             className={`px-4 py-2 rounded-r ${billing === 'Yearly' ? 'bg-white text-black' : 'bg-gray-800'}`}
//           >
//             Yearly <span className="text-green-400 ml-1 text-xs">Save 21%</span>
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
//           {plans.map(plan => (
//             <div
//               key={plan.name}
//               onClick={() => setSelectedPlan(plan.name)}
//               className={`cursor-pointer border rounded-lg p-6 text-left w-full md:w-1/2 ${
//                 selectedPlan === plan.name ? 'border-white' : 'border-gray-700'
//               }`}
//             >
//               <h2 className="text-lg font-semibold mb-2">{plan.name}</h2>
//               <p className="text-sm text-gray-400 mb-4">
//                 Lorem ipsum dolor sit amet consectetur.
//               </p>
//               <div className="text-2xl font-bold mb-4">${plan.price}</div>
//               <ul className="text-sm text-gray-300 space-y-1">
//                 {plan.features.map((f, i) => (
//                   <li key={i}>✓ {f}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleContinue}
//           className="w-full md:w-1/2 py-3 bg-gray-400 text-black font-semibold rounded cursor-pointer hover:bg-white transition"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectPlan;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const plans = [
  {
    name: 'Professional',
    monthlyPrice: 149,
    yearlyPrice: 1399,
    features: ['Unlimited courses', 'Unlimited courses', 'Unlimited courses', 'Unlimited courses']
  },
  {
    name: 'Organization',
    monthlyPrice: 299,
    yearlyPrice: 2849,
    features: ['Unlimited courses', 'Unlimited courses', 'Unlimited courses', 'Unlimited courses']
  }
];

const SelectPlan = () => {
  const { updateFormData, getAllFormData } = useSignupForm('plan');
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('Professional');
  const [billing, setBilling] = useState('Monthly');

  const handleContinue = () => {
    updateFormData({
      selectedPlan,
      billingCycle: billing
    });
    navigate('/signup/review');
    const allData = getAllFormData();
    console.log('getAllFormData check', allData);
  };

  const getPrice = (plan) => (billing === 'Monthly' ? plan.monthlyPrice : plan.yearlyPrice);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4">
      
      <div className="max-w-2xl w-full mt-12">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />
        <h1 className="text-2xl font-semibold mb-2">Which plan would you like to start with?</h1>
        <p className="text-sm text-gray-400 mb-6">
          Lorem ipsum dolor sit amet consectetur. Sed quis aenean posuere ipsum eu urna netus sed sagittis.
        </p>
      </div>

      <div className="max-w-2xl w-full text-center mt-3">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setBilling('Monthly')}
            className={`px-4 py-2 rounded-l-md border ${
              billing === 'Monthly' ? 'bg-white text-black' : 'bg-transparent text-white border-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('Yearly')}
            className={`px-4 py-2 rounded-r-md border ${
              billing === 'Yearly' ? 'bg-white text-black' : 'bg-transparent text-white border-gray-700'
            }`}
          >
            Yearly
            <span className="ml-2 text-green-500 text-xs">Save 21%</span>
          </button>
        </div>

        {/* Plan Cards */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`cursor-pointer border rounded-lg p-6 text-left w-full md:w-1/2 ${
                selectedPlan === plan.name
                  ? 'border-red-500'
                  : 'border-gray-700 hover:border-gray-500 transition'
              }`}
            >
              <h2 className="text-lg font-semibold mb-2">{plan.name.toUpperCase()}</h2>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur. Elit egestas risus.
              </p>
              <div className="text-2xl font-bold mb-4">${getPrice(plan).toLocaleString()}</div>
              <ul className="text-sm text-gray-300 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Border */}
        <hr className="border-t border-gray-700 my-6" />

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full md:w-1/2 py-3 mb-8 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;

