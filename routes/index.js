const express = require("express");
const randompass = require("../public/js/Random-ps-Gen");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.post("/", (req, res) => {
  const password = randompass;
  password.updataitem(req.body);
  res.render("index", { pw: password });
});

module.exports = routes;
