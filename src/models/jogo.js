import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
    titulo: {type: String,},
    descricao: {type: String},
    data_lancamento: {type: Date},
    preco: {type: String},
}
, 
{
    versionKey: false,
    timestamps: true

});

const jogo = mongoose.model("jogos", jogoSchema)

export {jogo, jogoSchema};


 