import mongoose from "mongoose";

const reclamacaoSchema = new mongoose.Schema({
    id: { type: String},
    nomeCompleto: { type: String, required: false },
    endereçoCompleto: { type: String, required: true },
    telefone: { type: String, required: false },
    reclamacao: { type: String, required: true },
})

const reclamacaoRegistrada = mongoose.model('reclamacao', reclamacaoSchema);

export default reclamacaoRegistrada;