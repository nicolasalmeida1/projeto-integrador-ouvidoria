import reclamacaoRegistrada from "../infraestrutura/reclamacaoSchema.js";
import dateTime from '../helper/formatDate.js'

class ReclamacaoController{
    static listarReclamacoes = (req, res) => {
        reclamacaoRegistrada.find((err, reclamacao) => {
            res.status(200).send(reclamacao);
        })
    }

    static inserirReclamacao = (req, res) => {
        let reclamacao = new reclamacaoRegistrada({
            nomeCompleto: req.body.nome,
            enderecoCompleto: req.body.endereco,
            data: dateTime(),
            telefone: req.body.telefone,
            reclamacao: req.body.reclamacao,
        });

        console.log(req.body)

        reclamacao.save((err) =>{
            if(err){
                res.status(500).send({message: `Erro ao tentar cadastrar uma nova reclamação: ${err.message}`});
            }else{
                res.status(200).redirect('/paginaReclamacaoEnviada')
            }
        })
    }

    static paginaInicial = (req, res) => {
        res.render('index');
    }

    static paginaReclamacao = (req, res) => {
        res.render('realizar_reclamacao');
    }

    static paginaReclamacaoEnviada = (req, res) => {
        res.render('reclamacao_enviada');
    }

    static visualizarReclamacao = (req, res) => {
        reclamacaoRegistrada.find({}, (err, reclamacoes) => {
            if (err) {
                console.log(err);
            } else {
                console.log(reclamacoes)
                res.render('visualizar_reclamacao', { reclamacoes: reclamacoes})
            }
        })
    }
}

export default ReclamacaoController;
