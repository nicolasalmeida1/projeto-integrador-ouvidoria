import express from "express";
import ReclamacaoController from "../controllers/reclamacaoController.js";

const routerReclamacao = express.Router();

routerReclamacao
    .get('/reclamacoes', ReclamacaoController.listarReclamacoes)
    .post('/cadastrar-reclamacao', ReclamacaoController.inserirReclamacao)

export default routerReclamacao;