const { CategoryServices } = require("../services");

module.exports = {
  create: async (req, res) => {
    if (!Boolean(req.body.name))
      return res.status(400).send({
        message: "name field is empty",
      });

    const name = req.body.name;
    const result = await CategoryServices.create(name);

    res.status(result.status).json({
      ...result.data,
    });
  },

  update: async (req, res) => {
    if (!Boolean(req.body.name))
      return res.status(204).send({
        message: "No data to update",
      });
    if (!Boolean(req.body.id))
      return res.status(400).send({
        message: "id field is required",
      });

    const name = req.body.category;
    const id = req.body.id;
    const result = await CategoryServices.update(id, name);

    res.status(result.status).json({
      ...result.category,
    });
  },

  getAll: async (req, res) => {
    const result = await CategoryServices.findAll();

    res.status(result.status).json({
      ...result.data,
    });
  },

  delete: async (req, res) => {
    if (!Boolean(req.params.id))
      return res.status(400).send({
        message: "id field is required",
      });

    const id = req.params.id;

    const result = await CategoryServices.delete(id);
    res.status(result.status).json({
      ...result.data,
    });
  },
};
