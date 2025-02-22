const { DeviceServices } = require("../services");

module.exports = {
  create: async (req, res) => {
    if (
      !Boolean(req.body.category) ||
      !Boolean(req.body.color) ||
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
    if (!Boolean(req.body.id))
      return res.status(400).send({
        message: "id field is required",
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

    const id = req.params.id;

    const result = await DeviceServices.delete(id);
    res.status(result.status).json({
      ...result.data,
    });
  },
};
