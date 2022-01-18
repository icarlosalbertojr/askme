const express = require("express")
const server = express()
const routes = require("./src/routes/index")
require("dotenv").config()

const SERVER_PORT = process.env.SERVER_PORT || 3001

server.set("view engine", "ejs")
server.use(express.static("public"))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(routes)

server.listen(SERVER_PORT, () => {
    console.log("Server is running!");
})
