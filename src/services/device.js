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

  update: async (Id, data) => {
    try {
      let result = await Device.update(data, { where: Id });
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
            as: "CategoryData",
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

  delete: async (Id) => {
    try {
      let result = await Device.destroy({ where: { Id } });
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
