import mongoose from "mongoose";

// Definição do schema para a entidade Gênero
const generoSchema = new mongoose.Schema({
    nome: {type: String,required: [true, "Nome do gênero é obrigatório"],
    }
}, {versionKey: false,
    timestamps: true 
});

const Genero = mongoose.model("Genero", generoSchema);

export { Genero, generoSchema };
