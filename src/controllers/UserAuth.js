const { otpExpiryInMin } = require("../constants");
const { asyncHandler } = require("../utils/asyncHandler");
const { generateOtp } = require("../utils/generateOtp");
const { User, VerificationCode } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const exists = await User.findOne({
    where: {
      email,
    },
  });
  if (exists) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const code = generateOtp();
  const virificationCodeCreate = await VerificationCode.create({
    ...req.body,
    code: code,
    expires: Date.now() + 100 * 60 * otpExpiryInMin,
    password: hashedPass,
  });
  return res.status(201).json({
    success: true,
    message: "Otp created successfully",
    data: virificationCodeCreate,
  });
});

const verifyCode = asyncHandler();

module.exports = {
  register,
};
