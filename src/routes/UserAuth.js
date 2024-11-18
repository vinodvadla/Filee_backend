const router = require("express").Router();
const authController = require("../controllers/UserAuth");

router.post("/register", authController.register);
router.post("/verify-otp", authController.verifyOtp);
router.post("/resend-otp", authController.resendOtp);
router.post("/login", authController.login);

module.exports = router;
