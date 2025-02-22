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
        name: "Tablet",
      },
      categories: [
        {
          id: 1,
          name: "Tablet",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          deleteAt: null,
        },
      ],
      device: {
        category: 1,
        color: "azul",
        partNumber: 40293,
      },
      devices: [
        {
          id: 1,
          category: {
            id: 1,
            name: "Tablet",
          },
          color: "azul",
          partNumber: 40293,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      categoryResponse: {
        id: 1,
        name: "Tablet",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deleteAt: null,
      },
      deviceResponse: {
        id: 1,
        category: {
          id: 1,
          name: "Tablet",
        },
        color: "azul",
        partNumber: 40293,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      internalError: { message: "Message error" },
      deleteResponse: { message: "Successfully deleted" },
      fieldRequiredResponse: { message: "field is required" },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/routerDoc.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index");
});
