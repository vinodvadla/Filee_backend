const { otpExpiryInMin } = require("../constants");
const { asyncHandler } = require("../utils/asyncHandler");
const { generateOtp } = require("../utils/generateOtp");
const { User, VerificationCode } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../services/nodemailer");

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const register = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
  const existingVerification = await VerificationCode.findOne({
    where: { email },
  });
  if (existingVerification) {
    await existingVerification.destroy();
  }

  const hashedPass = await bcrypt.hash(password, 10);
  const otp = generateOtp();
  await VerificationCode.create({
    name,
    email,
    phone,
    password: hashedPass,
    code: otp,
    expires: Date.now() + otpExpiryInMin * 60 * 1000,
  });

  let html = `<p>${otp}</p>`;
  await sendMail(email, "Credentials for registration", html);

  return res.status(201).json({
    success: true,
    message: "OTP sent successfully. Complete verification to register.",
  });
});

const verifyOtp = asyncHandler(async (req, res) => {
  const { email, code } = req.body;

  const verificationRecord = await VerificationCode.findOne({
    where: { email, code },
  });
  if (!verificationRecord) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid OTP or email" });
  }

  if (new Date(verificationRecord.expires) < new Date()) {
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  const { name, phone, password } = verificationRecord;
  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  await VerificationCode.destroy({ where: { email } });
  const token = generateToken(user);
  return res.status(200).json({
    success: true,
    message: "User registered and verified successfully",
    token,
  });
});

const resendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const verificationRecord = await VerificationCode.findOne({
    where: { email },
  });
  if (!verificationRecord) {
    return res
      .status(404)
      .json({ success: false, message: "No pending registration found" });
  }
  const otp = generateOtp();
  verificationRecord.code = otp;
  verificationRecord.expires = Date.now() + otpExpiryInMin * 60 * 1000;
  await verificationRecord.save();
  let html = `<p>${otp}</p>`;
  await sendMail(email, "Resend OTP", html);

  return res.status(200).json({
    success: true,
    message: "OTP resent successfully",
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  console.log(user);
  console.log(email, password);

  console.log(user);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  const token = generateToken(user);

  return res.status(200).json({
    success: true,
    message: "Logged in successfully",
    token,
  });
});

module.exports = {
  register,
  verifyOtp,
  resendOtp,
  login,
};
