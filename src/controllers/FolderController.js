const { Folder, User, SharedFolder } = require("../models");
const { asyncHandler } = require("../utils/asyncHandler");

const getAllFoldersOfUser = asyncHandler(async (req, res, next) => {
  const folders = await Folder.findAll({
    where: {
      userId: req.user.id,
    },
  });

  return res.status(200).json({
    success: true,
    message: "Folders fetched successfully",
    data: folders,
  });
});

const getFolderById = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;

  const folder = await Folder.findOne({
    where: {
      id: folderId,
      userId: req.user.id,
    },
  });

  if (!folder) {
    return res.status(404).json({
      success: false,
      message: "Folder not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Folder fetched successfully",
    data: folder,
  });
});

const createFolder = asyncHandler(async (req, res, next) => {
  const { name, parentId } = req.body;
  const folder = await Folder.create({
    name,
    parentId: parentId || null,
    userId: req.user.id,
  });

  return res.status(201).json({
    success: true,
    message: "Folder created successfully",
    data: folder,
  });
});

const updateFolder = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;
  const { name } = req.body;

  const folder = await Folder.findOne({
    where: {
      id: folderId,
      userId: req.user.id,
    },
  });

  if (!folder) {
    return res.status(404).json({
      success: false,
      message: "Folder not found",
    });
  }

  folder.name = name;
  await folder.save();

  return res.status(200).json({
    success: true,
    message: "Folder updated successfully",
    data: folder,
  });
});

const deleteFolder = asyncHandler(async (req, res, next) => {
  const { folderId } = req.params;

  const folder = await Folder.findOne({
    where: {
      id: folderId,
      userId: req.user.id,
    },
  });

  if (!folder) {
    return res.status(404).json({
      success: false,
      message: "Folder not found",
    });
  }

  await folder.destroy();

  return res.status(200).json({
    success: true,
    message: "Folder deleted successfully",
  });
});

const getSharedFolders = asyncHandler(async (req, res, next) => {
  const sharedFolders = await SharedFolder.findAll({
    where: {
      userId: req.user.id,
    },
    include: [
      {
        model: Folder,
        as: "folder",
      },
    ],
  });

  return res.status(200).json({
    success: true,
    message: "Shared folders fetched successfully",
    data: sharedFolders.map((sf) => sf.folder),
  });
});

module.exports = {
  getAllFoldersOfUser,
  getFolderById,
  createFolder,
  updateFolder,
  deleteFolder,
  getSharedFolders,
};
