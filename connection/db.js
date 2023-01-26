const Sequelize = require("sequelize");

const db = new Sequelize("servidor", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = db;
