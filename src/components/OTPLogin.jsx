import React, { useState } from "react";
import logo from '../assets/logo.png';
import { useLocation, useNavigate } from "react-router-dom";

import { verifyEmailOTP } from "../services/auth";

export default function OTPLogin() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "your email";

  const handleChange = (value, index) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Verifying code:", code);
    try {
      const result = await verifyEmailOTP(email, code);
      // navigate("/dashboard");
      navigate("/login/dashbord", { state: { email: email } });
      console.log("Verification success:", result);
    } catch (err) {
      console.error("Verification failed:", err.message);
    }
    // Add verification logic here
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-left max-w-md w-full px-6">
        <img src={logo} alt="Logo" className="h-10 mb-6" />
        <h1 className="text-2xl font-semibold mb-2">Verification code</h1>
        <p className="text-sm text-gray-400 mb-6">
          We sent a verification code to <span className="font-semibold text-white">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-2 mb-4">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                className="w-12 h-12 text-center text-lg border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full p-3 rounded-md border border-gray-500 hover:bg-gray-800"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}