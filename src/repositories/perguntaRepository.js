const Pergunta = require("../models/pergunta")

const salvarPergunta = async ({ titulo, descricao }) => {

    if (!titulo) {
        throw new Error("Titulo inválido")
    }

    if (!descricao) {
        throw new Error("Descrição inválida")
    }

    try {
        const pergunta = await Pergunta.create({ titulo, descricao })
        return {
            ...pergunta,
            createdAt: new Date(pergunta.createdAt).toLocaleString()
        };
    } catch (error) {
        throw new Error("Erro ao salvar a pergunta!")
    }
}

const buscarPorId = async (id) => {

    if (!id) {
        throw new Error("Id inválido")
    }

    try {
        const pergunta = await Pergunta.findOne({
            raw: true,
            where: { id }
        })
        return {
            ...pergunta,
            createdAt: new Date(pergunta.createdAt).toLocaleString()
        };
    } catch (error) {
        throw new Error("Erro ao buscar pergunta por Id!")
    }

}

const buscarTodas = async () => {
    try {
        const perguntas = await Pergunta.findAll({
            raw: true,
            order: [
                ["createdAt", "DESC"]
            ]
        })
        return perguntas.map(pergunta => ({
            ...pergunta,
            createdAt: new Date(pergunta.createdAt).toLocaleString()
        })
        );
    } catch (error) {
        throw new Error("Erro ao buscar todas as perguntas!")
    }
}

module.exports = { salvarPergunta, buscarPorId, buscarTodas }