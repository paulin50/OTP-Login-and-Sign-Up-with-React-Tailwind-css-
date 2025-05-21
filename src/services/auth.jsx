// src/services/auth.js (Mock Version)
import { toast } from 'react-hot-toast';

// Mock function to simulate API delay
const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 800));

// export const sendVerificationEmail = async (email) => {
//   await simulateApiDelay();
//   console.log(`Mock: Verification email sent to ${email}`);
//   toast.success('Verification code sent to your email');
//   return { success: true };
// };

export const sendVerificationEmail = async (email) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/send-verification-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to send verification email");
    }

    const result = await response.json();
    
    if (result.success) {
      console.log('result test', result);
      toast.success("Verification code sent to your email");
    } else {
      toast.error("Failed to send verification code");
    }

    return result;
  } catch (error) {
    console.error("Error sending verification email:", error);
    toast.error("Error sending verification email. Please try again.");
    throw error;
  }
};

export const verifyEmailOTP = async (email, otp) => {
  await simulateApiDelay();
  
  // Simple mock validation
  // if (otp !== '123456') {
  //   toast.error('Invalid verification code');
  //   throw new Error('Invalid verification code');
  // }

  try {

    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    if (!res.ok) {
      throw new Error("Email verification failed for OTP");
    }

    const result = await res.json();
    
    if (result.success) {
      // console.log('result test', result);
      // toast.success("Verification code sent to your email");

      console.log(`Mock: Email ${email} verified with OTP ${otp}`);
      toast.success('Email verified successfully');

    } else {
      toast.error("Failed to send verification code");
    }

    return result;
    
  } catch (error) {
    console.error("Error verifying email OTP:", error);
    toast.error("Error verifying emailOTP . Please try again.");
    throw error;
  }

  

  // console.log(`Mock: Email ${email} verified with OTP ${otp}`);
  // toast.success('Email verified successfully');
  // return { 
  //   success: true,
  //   token: 'mock-auth-token',
  //   user: { email }
  // };
};

export const registerUser = async (userData) => {
  await simulateApiDelay();
  console.log('Mock: User registered', userData);
  toast.success('Registration successful!');
  return { 
    success: true,
    user: userData 
  };
};

export const authenticateWithGoogle = async (googleData) => {
  await simulateApiDelay();
  console.log('Mock: Google auth successful', googleData);
  toast.success('Google authentication successful');
  return {
    success: true,
    token: 'mock-google-auth-token',
    user: {
      email: googleData.email,
      firstName: googleData.given_name,
      lastName: googleData.family_name
    }
  };
};

export const resendOTP = async (email) => {
  await simulateApiDelay();
  console.log(`Mock: Resent OTP to ${email}`);
  toast.success('New verification code sent');
  return { success: true };
};