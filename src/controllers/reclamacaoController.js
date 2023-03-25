import reclamacaoRegistrada from "../infraestrutura/reclamacaoSchema.js";

class ReclamacaoController{
    static listarReclamacao = (req, res) => {
        reclamacaoRegistrada.find((err, reclamacao) => {
            res.status(200).send(reclamacao);
        })
    }

    static inserirReclamacao = (req, res) => {
        let reclamacao = new reclamacaoRegistrada(req.body);

        reclamacao.save((err) =>{
            if(err){
                res.status(500).send({message: `Erro ao tentar cadastrar uma nova reclamação: ${err.message}`});
            }else{
                res.status(200).send(reclamacao.toJSON());
            }
        })
    }
}

export default ReclamacaoController;