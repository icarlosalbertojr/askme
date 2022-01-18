const Sequelize = require("sequelize")
const sequelize = require("../database/configDB")

const Pergunta = sequelize.define("perguntas", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({ force: false })
    .then(() => {
        console.log("Tabela 'Perguntas' foi criada!");
    })
    .catch((error) => {
        console.error(error);
    })

module.exports = Pergunta