
import {jogoRepository} from "../repositories/jogoRepository.js"
import { JogoDTO } from "../dtos/jogoDTO.js";

export class JogoService{
    constructor(){
        this.jogoRepository = new jogoRepository();
    }

    createJogo = async (JogoData) => {
        const jogo = JogoDTO.fromRequest(JogoData);
        return await this.jogoRepository.create(jogo);
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
        let updatedJogo = {...JogoData};
        if(JogoData.genero){
            const foundgenero = await this.generoRepository.findById(JogoData.genero.id);
            if (!foundgenero){
                throw new Error("Jogo não encontrado");
            };
                updatedJogo.genero = {
                    ...foundgenero._doc
                };
            
        };
        if (!updatedJogo){
            throw new Error("Jogo não encontrado!");
        };
        return updatedJogo;
    }
    deleteJogo = async (id) => {
        const deleteJogo = await this.jogoRepository.delete(id);
        if (!deleteJogo){
            throw new Error("Jogo não encontrado!")
        }
        return deleteJogo
    }

}
