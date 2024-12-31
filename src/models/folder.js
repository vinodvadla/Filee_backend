"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Folder, {
        foreignKey: "parentId",
        as: "subfolders",
      });
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "folder",
      });
    }
  }

  Folder.init(
    {
      name: DataTypes.STRING,
      parentId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Folder",
    }
  );
  return Folder;
};
