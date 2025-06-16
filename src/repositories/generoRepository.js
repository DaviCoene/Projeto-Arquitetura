import { BaseRepository } from "./baseRepository.js";
import { Genero } from "../models/Genero.js";

export class generoRepository extends BaseRepository {
    constructor(){
        super(Genero)
    }

    async searchByName(name){
        return await this.model.find({
            name: {$regex: name, $options: "i"}
        })
    }
}