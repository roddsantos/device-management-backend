const { CategoryServices } = require("../services");

module.exports = {
  create: async (req, res) => {
    if (Boolean(req.body.Name))
      return res.status(400).send({
        message: "Category field is empty",
      });

    const Name = req.body.Name;
    const category = await CategoryServices.create(Name);

    res.status(category.status).json({
      ...category.data,
    });
  },

  update: async (req, res) => {
    if (Boolean(req.body.Name))
      return res.status(400).send({
        message: "No data to update",
      });
    if (Boolean(req.body.Id))
      return res.status(400).send({
        message: "Id field is required",
      });

    const Name = req.body.category;
    const Id = req.body.id;
    const category = await CategoryServices.update(Id, Name);

    res.status(category.status).json({
      ...speciality.category,
    });
  },
};
