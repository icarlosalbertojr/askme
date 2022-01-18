const route = require("express").Router()
const perguntaRoutes = require("./perguntaRoutes")
const respostaRoutes = require("./respostaRoutes")
const perguntaController = require("../controllers/perguntaController")

route.get("/", perguntaController.paginaListarPergunta)
route.use("/perguntas", perguntaRoutes)
route.use("/respostas", respostaRoutes)

module.exports = route