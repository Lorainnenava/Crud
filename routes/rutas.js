const express = require("express");
const routes= express.Router();
const { getUser, getUsers, postUser, putUser, deleteUser} = require("../controller/controlador");

routes.get("/", getUser);
routes.get("/:id", getUsers);
routes.post("/", postUser);
routes.put("/:id", putUser);
routes.delete("/:id", deleteUser);

module.exports = routes;