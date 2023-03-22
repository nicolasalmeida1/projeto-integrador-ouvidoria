import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
    id: { type: String},
    nomeCompleto: { type: String, required: false },
    endereçoCompleto: { type: String, required: true },
    telefone: { type: String, required: false },
    reclamação: { type: String, required: true },
})

const pessoasRegistrada = mongoose.model('pessoa', pessoaSchema);

export default pessoasRegistrada;