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

    if (req.body.partNumber > 999999 || req.body.partNumber < 1)
      return res.status(400).send({
        message: "PartNumber is not a valid number",
      });

    const data = req.body;
    const result = await DeviceServices.create(data);

    res.status(result.status).json({
      data: result.data,
    });
  },

  update: async (req, res) => {
    if (!Boolean(req.body.id))
      return res.status(400).send({
        message: "id field is required",
      });

    if (req.body.partNumber) {
      if (req.body.partNumber > 999999 || req.body.partNumber < 1)
        return res.status(400).send({
          message: "PartNumber is not a valid number",
        });
    }

    const data = req.body;
    const id = req.body.id;
    const result = await DeviceServices.update(id, data);

    res.status(result.status).json({
      data: result.data,
    });
  },

  getAll: async (req, res) => {
    const result = await DeviceServices.findAll();

    res.status(result.status).json({
      data: result.data,
    });
  },

  delete: async (req, res) => {
    if (!Boolean(req.params.id))
      return res.status(400).send({
        message: "id field is required",
      });

    const id = req.params.id;

    const result = await DeviceServices.delete(id);
    res.status(result.status).json({
      data: result.data,
    });
  },
};
