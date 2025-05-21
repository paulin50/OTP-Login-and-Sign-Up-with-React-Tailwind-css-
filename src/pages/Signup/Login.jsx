// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate('/verify');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center">
//       <div className="w-full max-w-sm px-4 text-center">
//         <img src="/logo192.png" alt="Logo" className="w-12 h-12 mx-auto mb-6" />
//         <h2 className="text-xl font-semibold mb-2">Log Into Supaclass</h2>
//         <p className="text-sm mb-6 text-gray-400">Don't have an account? Create one instead.</p>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 bg-zinc-900 text-white border border-zinc-700 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="my-4 text-zinc-500 text-sm">or</div>

//         <div className="space-y-2">
//           <button className="w-full bg-white text-black py-2 rounded">Continue with Google</button>
//           <button className="w-full bg-white text-black py-2 rounded">Continue with Apple</button>
//         </div>

//         <p className="text-xs text-zinc-600 mt-6">
//           By signing in, you acknowledge our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;




import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaApple } from 'react-icons/fa';   // Apple icon
import logo from '../../assets/logo.png'
import { sendVerificationEmail } from '../../services/auth';

// A simple S-like logo SVG similar to the image
// const SupaclassLogo = () => (
//   <svg
//     viewBox="0 0 40 40"
//     className="w-10 h-10 mx-auto mb-8 fill-white" // Adjusted size and margin
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M29.69,11.32a1,1,0,0,0-1.11-.59,9.73,9.73,0,0,1-7,3.69,9.91,9.91,0,0,1-7.65-4.6,1,1,0,0,0-1.28-.43,1,1,0,0,0-.42,1.28,12,12,0,0,0,9.35,5.59,11.72,11.72,0,0,0,8.4-4.35A1,1,0,0,0,29.69,11.32ZM10.31,28.68a1,1,0,0,0,1.11.59,9.73,9.73,0,0,1,7-3.69,9.91,9.91,0,0,1,7.65,4.6,1,1,0,0,0,1.28.43,1,1,0,0,0,.42-1.28,12,12,0,0,0-9.35-5.59,11.72,11.72,0,0,0-8.4,4.35A1,1,0,0,0,10.31,28.68Z" />
//   </svg>
// );

function Login() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    // For now, let's assume email validation happens elsewhere or is simple
    if (email) {
      setIsLoading(true);
          try {
            await sendVerificationEmail(email);
            navigate("/login/opt-input", { state: { email } });
          } finally {
            setIsLoading(false);
          }
    } else {
      // Handle empty email case if needed, e.g., show an error
      console.log("Email is required");
    }
  };

  // Placeholder navigation for create account
  const handleCreateAccount = () => {
    navigate('/signup'); // Or your actual route for account creation
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Use the SVG logo or your img tag if you prefer */}
        {/* <SupaclassLogo /> */}
        <img src={logo} alt="Supaclass Logo" className="h-8 mb-3" />
        {/* <img src="/logo192.png" alt="Logo" className="w-10 h-10 mx-auto mb-8" /> */}
        
        <h2 className="text-2xl font-semibold mb-2">Log Into Supaclass</h2>
        <p className="text-sm mb-8 text-neutral-400">
          Don't have an account?{' '}
          <a
            href="#" className="underline"
            onClick={handleCreateAccount}
            // className="text-white font-medium hover:underline cursor-pointer"
          >
            Create an account
          </a>
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-neutral-800 text-white border border-neutral-700 rounded-md placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-neutral-200 hover:bg-neutral-300 text-black font-semibold px-4 py-3 rounded-md transition-colors"
          >
            Log in
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-neutral-700" />
          <span className="mx-4 text-neutral-500 text-sm">or</span>
          <hr className="flex-grow border-neutral-700" />
        </div>

        <div className="flex space-x-3"> {/* Use space-x-2 or space-x-3 for gap */}
          <button className="w-1/2 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 px-4 rounded-md border border-neutral-700 transition-colors">
            <FcGoogle size={20} /> {/* Slightly smaller icon if needed for space */}
            Google
          </button>
          <button className="w-1/2 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 px-4 rounded-md border border-neutral-700 transition-colors">
            <FaApple size={20} /> {/* Slightly smaller icon */}
            Apple
          </button>
        </div>

        <p className="text-xs text-neutral-500 mt-8">
          By signing up to Supaclass, you acknowledge that you have read and agree to{' '}
          <a href="/terms" className="underline hover:text-white cursor-pointer">Terms</a> and{' '}
          <a href="/privacy" className="underline hover:text-white cursor-pointer">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;