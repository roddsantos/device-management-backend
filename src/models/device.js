const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./category");

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
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "Id",
      },
    },
    Color: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        len: [1, 16],
      },
    },
    partNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Category.hasMany(Device, {
  constraints: false,
});
Device.belongsTo(Category, {
  as: "CategoryData",
  foreignKey: "Category",
});

module.exports = Device;
