const Sequelize = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: process.env.DATABASE_DIALECT,
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST
    })

sequelize.authenticate()
    .then(() => {
        console.log("Banco de dados conectado!")
    })
    .catch((error) => {
        console.error(error)
    })

module.exports = sequelize;