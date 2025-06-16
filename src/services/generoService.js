import { generoRepository } from "../repositories/generoRepository.js";
import { GeneroDTO } from "../dtos/GeneroDTO.js";

export class GeneroService {
    constructor() {
        this.generoRepository = new generoRepository();
    }

    async createGenero(generoData) {
        const genero = GeneroDTO.fromRequest(generoData);
        return await this.generoRepository.create(genero);
    }

    async getAllGenero() {
        return await this.generoRepository.findAll();
    }

    async getGeneroById(id) {
        const foundGenero = await this.generoRepository.findById(id);
        if (!foundGenero) {
            throw new Error("Gênero não encontrado!");
        }
        return foundGenero;
    }

    async updateGenero(id, generoData) {
        const updatedGenero = await this.generoRepository.update(id, generoData);
        if (!updatedGenero) {
            throw new Error("Gênero não encontrado!");
        }
        return updatedGenero;
    }

    async deleteGenero(id) {
        const deletedGenero = await this.generoRepository.delete(id);
        if (!deletedGenero) {
            throw new Error("Gênero não encontrado!");
        }
        return deletedGenero;
    }

    async searchGeneroByName(name){
        if(!name || name.trim() === ""){
            throw new Error("Informar o nome do Genero")
        }
        return await this.generoRepository.searchByName(name)
    }
}
