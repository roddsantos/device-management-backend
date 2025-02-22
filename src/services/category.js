const Category = require("../models/category");

module.exports = {
  create: async (Name) => {
    const category = new Category({ Name });

    try {
      let result = await category.save();
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error creating category" },
      };
    }
  },

  update: async (Id, Name) => {
    try {
      let result = await Category.update({ Name }, { where: Id });
      return {
        status: 200,
        data: result,
      };
    } catch (error) {
      return {
        status: 500,
        data: { message: error.message || "Error updating category" },
      };
    }
  },
};
