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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        max: 128,
        min: 0,
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Category;
