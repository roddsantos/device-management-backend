const Category = require("../models/category");
const Device = require("../models/device");

module.exports = {
  create: async (data) => {
    const device = new Device(data);

    try {
      let result = await device.save();
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error creating device" },
      };
    }
  },

  update: async (id, data) => {
    try {
      let result = await Device.update(data, { where: id });
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error updating device" },
      };
    }
  },

  findAll: async () => {
    try {
      let result = await Device.findAll({
        include: [
          {
            model: Category,
            as: "categoryData",
            paranoid: false,
            attributes: ["Id", "Name"],
          },
        ],
      });
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error fetching devices" },
      };
    }
  },

  delete: async (id) => {
    try {
      let result = await Device.destroy({ where: { id } });
      return {
        status: 200,
        data: { message: "Device successfully deleted" },
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error deleting device" },
      };
    }
  },
};
