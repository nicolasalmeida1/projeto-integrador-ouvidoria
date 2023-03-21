import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
    id: { type: String},
    nomeCompleto: { type: String, required: true },
    endereçoCompleto: { type: String, required: true },
    telefone: { type: String, required: true },
})

const pessoaRegistrada = mongoose.model('pessoa', pessoaSchema);

export default pessoaRegistrada;