const Resposta = require("../models/resposta")

const buscarRespostaPorPergunta = async (perguntaId) => {
    try {
        const respostas = await Resposta.findAll({
            raw: true,
            where: {
                perguntaId
            },
            order: [
                ["createdAt", "DESC"]
            ]
        })
        return respostas.map(resposta => ({
            ...resposta,
            createdAt: new Date(resposta.createdAt).toLocaleString()
        }))
    } catch (error) {
        throw new Error("Erro ao buscar respostas por pergunta!")
    }
}

const salvarResposta = async ({ descricao, perguntaId }) => {

    if (!perguntaId) {
        throw new Error("Id da pergunta inválido")
    }

    if (!descricao) {
        throw new Error("Descrição inválida")
    }
    
    try {
        const response = await Resposta.create({ descricao, perguntaId })
        return response
    } catch (error) {
        throw new Error("Erro ao salvar resposta!")
    }
}

module.exports = { buscarRespostaPorPergunta, salvarResposta }