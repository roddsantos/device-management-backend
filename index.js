const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
