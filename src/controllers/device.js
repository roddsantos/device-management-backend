const { DeviceServices } = require("../services");

module.exports = {
  create: async (req, res) => {
    if (
      !Boolean(req.body.Category) ||
      !Boolean(req.body.Color) ||
      !Boolean(req.body.partNumber)
    )
      return res.status(400).send({
        message: "Some fields are missing",
      });

    const data = req.body;
    const result = await DeviceServices.create(data);

    res.status(result.status).json({
      ...result.data,
    });
  },

  update: async (req, res) => {
    if (!Boolean(req.body.Id))
      return res.status(400).send({
        message: "Id field is required",
      });

    const data = req.body;
    const Id = req.body.id;
    const result = await DeviceServices.update(Id, data);

    res.status(result.status).json({
      ...result.category,
    });
  },

  getAll: async (req, res) => {
    const result = await DeviceServices.findAll();

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

    const result = await DeviceServices.delete(Id);
    res.status(result.status).json({
      ...result.data,
    });
  },
};
