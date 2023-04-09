import app from "../app.js"
import express from "express"
import routerReclamacao from "./reclamacaoRouter.js"

const routes = (app) => {
    app.use(
        express.json(),
        routerReclamacao
    )
}

export default routes;