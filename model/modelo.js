const { DataTypes } = require("sequelize");
const db = require("../connection/db");

const Users = db.define("registros", {
  usuario: { type: DataTypes.STRING },
  contraseña: { type: DataTypes.NUMBER },
});

module.exports = Users;
