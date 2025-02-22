const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Device = sequelize.define(
  "Device",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 16],
      },
    },
    partNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 999999,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Device;
