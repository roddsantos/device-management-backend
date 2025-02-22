const { CategoryServices } = require("../services");

module.exports = {
  create: async (req, res) => {
    if (!Boolean(req.body.Name))
      return res.status(400).send({
        message: "Name field is empty",
      });

    const Name = req.body.Name;
    const result = await CategoryServices.create(Name);

    res.status(result.status).json({
      ...result.data,
    });
  },

  update: async (req, res) => {
    if (!Boolean(req.body.Name))
      return res.status(204).send({
        message: "No data to update",
      });
    if (!Boolean(req.body.Id))
      return res.status(400).send({
        message: "Id field is required",
      });

    const Name = req.body.category;
    const Id = req.body.id;
    const result = await CategoryServices.update(Id, Name);

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
        message: "Id field is required",
      });

    const Id = req.params.id;

    const result = await CategoryServices.delete(Id);
    res.status(result.status).json({
      ...result.data,
    });
  },
};
