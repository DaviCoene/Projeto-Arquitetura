
import {jogoRepository} from "../repositories/jogoRepository.js"
import { JogoDTO } from "../dtos/jogoDTO.js";

export class JogoService{
    constructor(){
        this.jogoRepository = new jogoRepository();
    }

    createJogo = async (JogoData) => {
        const Jogo = JogoDTO.fromRequest(JogoData);
        return await this.jogoRepository.create(Jogo);
    }
    getAllJogo = async () => {
        return await this.jogoRepository.findAll();
    }
    
    getJogoById = async (id) => {
        const foundJogo = await this.jogoRepository.findById(id);
        if (!foundJogo){
            throw new Error("Jogo não encontrado!")
        }
        return foundJogo
    }
    updateJogo = async (id, JogoData) => {
        const updatedJogo = await this.jogoRepository.update(id, JogoData);
        if (!updatedJogo){
            throw new Error("Jogo não encontrado!")
        }
        return updatedJogo
    }
    deleteJogo = async (id) => {
        const deleteJogo = await this.jogoRepository.delete(id);
        if (!deleteJogo){
            throw new Error("Jogo não encontrado!")
        }
        return deleteJogo
    }

}
