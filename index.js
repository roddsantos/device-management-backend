const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// cors config
const corsOptions = {
  origin: ["http://localhost:4200"],
  optionsSuccessStatus: 200,
  methods: ["GET", "PATCH", "POST", "DELETE", "HEAD", "OPTIONS"],
  allowedHeaders: [
    "Authorization",
    "Content-Type",
    "Origin",
    "Accept",
    "Access-Control-Allow-Origin",
  ],
};
app.use(cors(corsOptions));

// Routes config
const routes = require("./src/routes/index");
app.use("/", routes);

//Swagger config
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
