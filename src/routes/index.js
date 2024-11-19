const router = require("express").Router();
const authRoutes = require("./UserAuth");
const folderRoutes = require("./FolderRoutes");
const authenticate = require("../middlewares/authenticate");

router.use("/auth", authRoutes);
router.use("/folder", authenticate, folderRoutes);
module.exports = router;
