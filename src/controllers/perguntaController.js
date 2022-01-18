const perguntaRepository = require("../repositories/perguntaRepository")
const respostaRepository = require("../repositories/respostaRepository")

const salvarPergunta = (req, res) => {

    const { titulo, descricao } = req.body

    perguntaRepository.salvarPergunta({ titulo, descricao })

        .then(response => {
            console.log(response)
            return res.redirect("/perguntas/pg/nova")
        })

        .catch(error => {
            console.error(error)
            return res.redirect("/perguntas/pg/nova")
        })
}

const paginaNovaPergunta = (req, res) => {
    res.render("perguntar")
}

const paginaPergunta = (req, res) => {
    const perguntaId = req.params.id

    perguntaRepository.buscarPorId(perguntaId)

        .then(pergunta => {

            respostaRepository.buscarRespostaPorPergunta(perguntaId)

                .then(respostas => {
                    return res.render("pergunta-page", { pergunta, respostas })
                })

                .catch(error => {
                    console.error(error)
                    return res.render("pergunta-page", { pergunta, respostas: null })
                })

        })

        .catch(error => {
            console.error(error);
            return res.redirect("/")
        })
}

const paginaListarPergunta = (req, res) => {

    perguntaRepository.buscarTodas()

        .then(data => {
            return res.render("index", { perguntas: data })
        })

        .catch(error => {
            console.error(error)
            return res.render("index", { perguntas: null })
        })

}

module.exports = {
    salvarPergunta,
    paginaNovaPergunta,
    paginaPergunta,
    paginaListarPergunta
}