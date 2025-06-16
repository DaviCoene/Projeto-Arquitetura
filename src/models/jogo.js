import mongoose from "mongoose";
import { generoSchema } from "../models/Genero.js";
import{ plataformaSchema }from "../models/Plataforma.js"

const jogoSchema = new mongoose.Schema({
    titulo: {type: String, required: [true,"Tìtulo é obrigatório"]},
    descricao: {type: String, required: [true,"descrição é obrigatório"]},
    data_lancamento: {type: Date, required: [true,"data é obrigatório"]},
    preco: {type: String, required: [true,"Preço é obrigatório"]},
    genero : generoSchema,
    plataforma : plataformaSchema,
}
, 
{
    versionKey: false,
    timestamps: true

});

const jogo = mongoose.model("jogos", jogoSchema)

export {jogo, jogoSchema};


 