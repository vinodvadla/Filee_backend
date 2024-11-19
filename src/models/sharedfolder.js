"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SharedFolder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SharedFolder.init(
    {
      userId: DataTypes.STRING,
      folderId: DataTypes.STRING,
      sharedBy: DataTypes.STRING,
      permission: DataTypes.ENUM("read", "write", "admin"),
    },
    {
      sequelize,
      modelName: "SharedFolder",
    }
  );
  return SharedFolder;
};
