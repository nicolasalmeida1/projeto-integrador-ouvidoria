import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routers/index.js"
import ejs from 'ejs'
import path from 'path'
import bodyParser from 'body-parser'

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

db.on("error", console.log.bind("Erro de conexão"));
db.once("open", ()=>{
    console.log("A conexão com o banco de dados foi estabelecida com sucesso!")
});


export default app;