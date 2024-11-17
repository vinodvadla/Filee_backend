const router = require("express").Router();
const authController = require("../controllers/UserAuth");

router.post("/register", authController.register);
module.exports = router;
