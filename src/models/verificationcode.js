"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VerificationCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }

  VerificationCode.init(
    {
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      expires: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "VerificationCode",
    }
  );
  return VerificationCode;
};
