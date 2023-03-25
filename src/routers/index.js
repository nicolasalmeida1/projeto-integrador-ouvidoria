import app from "../app.js"
import express from "express"
import routerReclamacao from "./reclamacaoRouter.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send("seja bem vindo à ouvidoria");
    })

    app.use(
        express.json(),
        routerReclamacao
    )
}

export default routes;