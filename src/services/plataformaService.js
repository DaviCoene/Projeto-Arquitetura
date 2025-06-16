import { plataformaRepository } from "../repositories/plataformaRepository.js";
import { PlataformaDTO } from "../dtos/PlataformaDTO.js";
class plataformaService {

    constructor() {
            this.plataformaRepository = new plataformaRepository();
        }

    async createPlataforma(plataformaData) {
        const plataforma = PlataformaDTO.fromRequest(plataformaData);
        return await this.plataformaRepository.create(plataforma);
    }

    async getAllPlataforma() {
        return await this.plataformaRepository.findAll();
    }

    async getPlataformaById(id) {
        const foundplataforma = await this.plataformaRepository.findById(id);
        if (!foundplataforma) {
            throw new Error("Gênero não encontrado!");
        }
        return foundplataforma;
    }

    async updatePlataforma(id, plataformaData) {
        const updatedPlataforma = await this.plataformaRepository.update(id, plataformaData);
        if (!updatedPlataforma) {
            throw new Error("Gênero não encontrado!");
        }
        return updatedPlataforma;
    }

    async deletePlataforma(id) {
        const deletedPlataforma = await this.plataformaRepository.delete(id);
        if (!deletedPlataforma) {
            throw new Error("Gênero não encontrado!");
        }
        return deletedPlataforma;
    }

    async searchplataformaByName(name){
        if(!name || name.trim() === ""){
            throw new Error("Informar o nome do plataforma")
        }
        return await this.plataformaRepository.searchByName(name)
    }
}

export default plataformaService;
