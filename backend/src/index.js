const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); /** Define que poderá ser usado Json no Corpo da Requisição */
app.use(routes);

app.listen(3333);