const router = require("express").Router();
const authRoutes = require("./UserAuth");

router.use("/auth", authRoutes);
module.exports = router;
