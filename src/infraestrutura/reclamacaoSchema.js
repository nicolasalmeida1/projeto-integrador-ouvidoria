import mongoose from "mongoose";

const reclamacaoSchema = new mongoose.Schema({
    nomeCompleto: { type: String, required: false },
    enderecoCompleto: { type: String, required: true },
    data: { type: String, required: true },
    telefone: { type: String, required: false },
    reclamacao: { type: String, required: true },
})

const reclamacaoRegistrada = mongoose.model('reclamacao', reclamacaoSchema);

export default reclamacaoRegistrada;
