// routes/auth.js
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const otpStore = {}; // key: email, value: { otp, expiresAt }

router.post("/send-verification-email", async (req, res) => {
  const { email } = req.body;
  console.log('backend email', email);
  const otp = crypto.randomInt(100000, 999999).toString();

  // Store OTP with expiration (e.g., 5 minutes)
  otpStore[email] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 mins from now
  };
  console.log('otpStore first print', otpStore);

  console.log(`Sending OTP ${otp} to ${email}`);

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Supaclass" <no-reply@supaclass.com>',
    to: email,
    subject: "Your Supaclass Verification Code",
    text: `Your verification code is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent", otp }); // You may omit otp in production
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

// POST /api/auth/verify-otp
router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' });
  }

  const expectedOtp = otpStore[email];

  console.log('backend expectedOtp check', expectedOtp);

  if (!expectedOtp) {
    return res.status(404).json({ success: false, message: 'OTP not found or expired' });
  }

  if (Date.now() > expectedOtp.expiresAt) {
    delete otpStore[email];
    return res.status(410).json({ success: false, message: "OTP has expired" });
  }

  if (otp !== expectedOtp.otp) {
    return res.status(401).json({ success: false, message: 'Invalid OTP' });
  }

  // ✅ OTP is valid — you can optionally clear it from memory
  delete otpStore[email];

  // Return success response
  return res.status(200).json({
    success: true,
    token: 'real-auth-token-here', // generate real JWT if needed
    user: { email }
  });
});

module.exports = router;
