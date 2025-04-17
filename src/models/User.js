import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    //id: {type: mongoose.Schema.Types.ObjectId,},
    name: {type: String, required: [true,"Título do user é obrigatório"]},
    email: {type: String },
    password: {type: String, required: [true,"password do user é obrigatório"]},
});

const user = mongoose.model("user", userSchema);

export {user, userSchema};