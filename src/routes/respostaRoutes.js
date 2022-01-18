const route = require("express").Router()
const { salvarResposta } = require("../controllers/respostaController")

route.post("/", salvarResposta)

module.exports = route