const express = require("express");
const app = express();
const port = 8025;
const Connectdb = require("./connection/conexion");
const routes = require("./routes/rutas");

app.use(express.json());
app.use(Connectdb);
app.use("/", routes);

app.get("/", function (req, res) {
  res.send("recibido");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

module.exports = app;
