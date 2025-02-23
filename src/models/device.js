const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./category");

const Device = sequelize.define(
  "Device",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
    color: {
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
  foreignKey: "category",
});
Device.belongsTo(Category, {
  as: "categoryData",
  foreignKey: "category",
});

module.exports = Device;
