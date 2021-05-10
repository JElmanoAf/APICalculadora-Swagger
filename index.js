// Imports
const express = require("express")
const cors = require("cors")
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const calculatorRouter = require("./routes/calculadora")
const PORT = process.env.PORT || 3031;
const options = {
definition: {
openapi: "3.0.0",
info: {
title: "SwaggerCalculatorAPI",
version: "1.0.0",
description: "Simple Calculator",
},
servers: [
{
url: "http://localhost:3031",
},
],
},
apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use(express.json());
app.use("/calculator", calculatorRouter);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));