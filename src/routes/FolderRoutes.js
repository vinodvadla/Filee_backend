const router = require("express").Router();
const FolderController = require("../controllers/FolderController");

router.get("/", FolderController.getAllFoldersOfUser);
router.get("/:id", FolderController.getFolderById);
router.post("/", FolderController.createFolder);
router.put("/:id", FolderController.updateFolder);
router.delete("/:id", FolderController.deleteFolder);

module.exports = router;
