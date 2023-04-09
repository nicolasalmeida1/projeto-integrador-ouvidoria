import express from "express";
import ReclamacaoController from "../controllers/reclamacaoController.js";

const routerReclamacao = express.Router();

routerReclamacao
    .get('/reclamacoes', ReclamacaoController.listarReclamacoes)
    .post('/cadastrar-reclamacao', ReclamacaoController.inserirReclamacao)
    .get('/', ReclamacaoController.paginaInicial)
    .get('/paginaReclamacao', ReclamacaoController.paginaReclamacao)
    .get('/visualizarReclamacao', ReclamacaoController.visualizarReclamacao)

export default routerReclamacao;
