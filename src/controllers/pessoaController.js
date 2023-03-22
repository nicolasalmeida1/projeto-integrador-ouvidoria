import pessoasRegistrada from "../infraestrutura/pessoaSchema.js";

class PessoaController{
    static listarPessoas = (req, res) => {
        pessoasRegistrada.find((err, pessoas) => {
            res.status(200).send(pessoas);
        })
    }

    static obterPessoaPorId = (req, res) => {
        const id = req.params.id;
        pessoasRegistrada.findById(id, (err, pessoa) => {
            if(err){
                res.status(500).send({message: `Não foi possível localizar uma reclamação com esse ID ${err.message}`});
            }else{
                res.status(200).send(pessoa)
            }
        })
    }

    static inserirPessoa = (req, res) => {
        let pessoa = new pessoasRegistrada(req.body);

        pessoa.save((err) =>{
            if(err){
                res.status(500).send({message: `Erro ao tentar cadastrar uma nova reclamação: ${err.message}`});
            }else{
                res.status(200).send(pessoa.toJSON());
            }
        })
    }
}

export default PessoaController;