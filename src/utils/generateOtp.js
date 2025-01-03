const otpGenerator = require("otp-generator");

const generateOtp = () => {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
};

module.exports = {
  generateOtp,
};
