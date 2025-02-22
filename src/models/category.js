const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define(
  "Category",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 128],
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Category;
