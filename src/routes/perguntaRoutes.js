const route = require("express").Router()
const { salvarPergunta, paginaNovaPergunta, paginaPergunta } = require("../controllers/perguntaController")

route.post("/salvar", salvarPergunta)
route.get("/pg/nova", paginaNovaPergunta)
route.get("/pg/:id", paginaPergunta)

module.exports = route