const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Device Management API",
    description: "API info of the Device Management application",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    schemas: {
      category: {
        Name: "Tablet",
      },
      categories: [
        {
          Id: 1,
          Name: "Tablet",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          deleteAt: null,
        },
      ],
      device: {
        categoryId: 1,
        Color: "azul",
        partNumber: 40293,
      },
      categoryResponse: {
        Id: 1,
        Name: "Tablet",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deleteAt: null,
      },
      deviceResponse: {
        Id: 1,
        categoryId: 1,
        Color: "azul",
        partNumber: 40293,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      internalError: {
        status: 500,
        data: { message: "Message error" },
      },
      deleteResponse: {
        status: 200,
        message: "Successfully deleted",
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
  "./src/routes/index.js",
  "./src/controllers/category.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index");
});
