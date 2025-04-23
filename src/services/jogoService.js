
import { JogoRepository } from "../repositories/jogoRepository.js";
import { JogoDTO } from "../dtos/JogoDTO.js";

export class JogoService{
    constructor(){
        this.JogoRepository = new JogoRepository();
    }

    createJogo = async (JogoData) => {
        const Jogo = JogoDTO.fromRequest(JogoData);
        return await this.JogoRepository.create(Jogo);
    }
    getAllJogo = async () => {
        return await this.JogoRepository.findAll();
    }
    
    // getJogoById = asy (id) => {
    //     const foundJogo = await this.JogoRepository.findById(id);
    //     if (!foundJogo){
    //         throw new Error("Autor não encontrado!")
    //     }
    //     return foundJogo
    // }
    // updateJogo = async (id, JogoData) => {
    //     const updatedJogo = await this.JogoRepository.update(id, JogoData);
    //     if (!updatedJogo){
    //         throw new Error("Autor não encontrado!")
    //     }
    //     return updatedJogo
    // }
    // deleteJogo = async (id) => {
    //     const deleteJogo = await this.JogoRepository.delete(id);
    //     if (!deleteJogo){
    //         throw new Error("Autor não encontrado!")
    //     }
    //     return deleteJogo
    // }

    // searchAutorByName = async (name) =>{
    //     if(!name || name.trim() === ""){
    //         throw new Error("Informar o nome do Autor")
    //     }
    //     return await this.JogoRepository.searchByName(name)
    // }

//     deleteAuthoor = async () => {
//         return await this.JogoRepository 
//     }
//     searchAutorByName  = async () => {
//         return await this.JogoRepository
//     }
}
