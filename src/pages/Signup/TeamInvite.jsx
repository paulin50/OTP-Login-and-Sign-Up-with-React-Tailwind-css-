// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const TeamInvite = () => {
//   const navigate = useNavigate();
//   const [teamMembers, setTeamMembers] = useState([
//     { role: 'Editor', email: '' },
//     { role: 'Designer', email: '' },
//     { role: 'Manager', email: '' }
//   ]);

//   const handleEmailChange = (index, value) => {
//     const newMembers = [...teamMembers];
//     newMembers[index].email = value;
//     setTeamMembers(newMembers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/signup/profile-handle');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-2">Invite some buddies over to help set things up</h1>
//         <p className="mb-6 text-gray-600">
//           Bring in your team to help build your program on Supaclass. Add their emails and assign roles to get started together.
//         </p>
        
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4 mb-6">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="flex items-center">
//                 <span className="w-24 text-gray-700">{member.role}</span>
//                 <input
//                   type="email"
//                   value={member.email}
//                   onChange={(e) => handleEmailChange(index, e.target.value)}
//                   placeholder="name@email.com"
//                   className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             ))}
//           </div>
          
//           <button
//             type="button"
//             className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
//           >
//             <span className="mr-1">+</span> Add
//           </button>
          
//           <div className="flex space-x-4">
//             <button
//               type="submit"
//               className="flex-grow bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700"
//             >
//               Continue
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate('/signup/profile-handle')}
//               className="flex-grow text-blue-600 hover:text-blue-800 py-3 px-4 border border-blue-600 rounded-lg"
//             >
//               Skip
//             </button>
//           </div>
          
//           <button
//             type="button"
//             onClick={() => navigate('/signup/personal-domain')}
//             className="w-full text-blue-600 hover:text-blue-800 py-2 mt-4"
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TeamInvite;





import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignupForm from '../../hooks/useSignupForm';
import logo from '../../assets/logo.png';

const roles = ['Editor', 'Designer', 'Manager'];

const TeamInvite = () => {
  const navigate = useNavigate();
  const { updateFormData } = useSignupForm('team');

  const [invites, setInvites] = useState([
    { role: 'Editor', email: '' },
  ]);

  const handleChange = (index, field, value) => {
    const newInvites = [...invites];
    newInvites[index][field] = value;
    setInvites(newInvites);
  };

  const handleAdd = () => {
    setInvites([...invites, { role: 'Editor', email: '' }]);
  };

  const handleContinue = () => {
    const filteredInvites = invites.filter(invite => invite.email.trim() !== '');
    updateFormData({ invites: filteredInvites });
    navigate('/signup/profile-handle'); // replace with your next route
  };

  const handleSkip = () => {
    updateFormData({ invites: [] });
    navigate('/signup/profile-handle'); // replace with your next route
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full">
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />

        <h1 className="text-2xl font-semibold mb-2">
          Invite some buddies over to help set things up
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Bring in your team to help build your program on Supaclass.
          Add their emails and assign roles to get started together.
        </p>

        {invites.map((invite, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <select
              value={invite.role}
              onChange={(e) => handleChange(index, 'role', e.target.value)}
              className="bg-gray-900 text-white border border-gray-700 rounded px-2 py-2 w-1/3"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            <input
              type="email"
              placeholder="email@example.com"
              value={invite.email}
              onChange={(e) => handleChange(index, 'email', e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white"
            />
          </div>
        ))}

        <button
          onClick={handleAdd}
          className="w-full py-2 border border-dashed border-gray-600 text-gray-400 hover:text-white mb-6 rounded"
        >
          + Add
        </button>

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
  );
};

export default TeamInvite;
