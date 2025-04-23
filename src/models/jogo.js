import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
    //id: {type: mongoose.Schema.Types.ObjectId,},
    titulo: {type: String, required: [true,"Título é obrigatorio"]},
    descricao: {type: String},
    data_lancamento: {type: Date},
    preco: {type: Int32Array, required: [true,"Preço é obrigatorio"]},
}
, 
{
    versionKey: false,
    timestamps: true

});

const jogo = mongoose.model("jogos", jogoSchema)

export {jogo, jogoSchema};


