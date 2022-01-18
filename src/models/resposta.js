const Sequelize = require("sequelize")
const sequelize = require("../database/configDB")

const Resposta = sequelize.define("respostas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Resposta.sync({ force: false })
    .then(() => {
        console.log("Tabela 'Resposta' foi criada!");
    })
    .catch((error) => {
        console.error(error);
    })

module.exports = Resposta