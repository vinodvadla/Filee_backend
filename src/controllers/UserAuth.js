const { otpExpiryInMin } = require("../constants");
const { asyncHandler } = require("../utils/asyncHandler");
const { generateOtp } = require("../utils/generateOtp");
const { User, VerificationCode } = requrie("../models");

const register = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

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

  const code = generateOtp();
  const virificationCodeCreate = await VerificationCode.create({
    ...req.body,
    otp,
    expires: Date.now() + 100 * 60 * otpExpiryInMin,
  });

  return res.status(201).json({
    success: true,
    message: "Otp created successfully",
    data: virificationCodeCreate,
  });
});

module.exports = {
  register,
};
