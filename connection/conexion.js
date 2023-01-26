const db = require("./db");

async function Connectdb(req, res, next) {
  try {
    await db.authenticate();
    console.log("La conexion ha sido establecida");
    next();
  } catch (error) {
    console.error("No se ha podido conectar a la base de datos: ", error);
  }
}

module.exports = Connectdb;
