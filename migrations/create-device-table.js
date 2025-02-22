"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("devices", {
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
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "Id",
        },
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
