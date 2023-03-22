import express from "express";
import PessoaController from "../controllers/PessoaController.js";

const routerPessoa = express.Router();

routerPessoa
    .get('/pessoas', PessoaController.listarPessoas)
    .get('/pessoas/:id', PessoaController.obterPessoaPorId)
    .post('/cadastrar-pessoa', PessoaController.inserirPessoa)

export default routerPessoa;