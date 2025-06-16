import mongoose from "mongoose";

// Definição do schema para a entidade Plataforma
const plataformaSchema = new mongoose.Schema({
    nome: {type: String,required: [true, "Nome da plataforma é obrigatório"],
    }
}, {versionKey: false,
    timestamps: true 
});

const plataforma = mongoose.model("Plataforma", plataformaSchema);

export { plataforma, plataformaSchema };
