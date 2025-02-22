"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("devices", {
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
          key: "Id",
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("devices");
  },
};
