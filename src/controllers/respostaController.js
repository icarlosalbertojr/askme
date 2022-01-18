const respostaRepository = require("../repositories/respostaRepository")

const salvarResposta = (req, res) => {
    const descricao = req.body.respostaDescricao
    const perguntaId = req.body.perguntaId
    
    respostaRepository.salvarResposta({ descricao, perguntaId })

        .then(data => {
            console.log(data)
            return res.redirect(`/perguntas/pg/${perguntaId}`)
        })

        .catch(error => {
            console.log(error)
            return res.redirect(`/perguntas/pg/${perguntaId}`)
        })
}

module.exports = { salvarResposta }