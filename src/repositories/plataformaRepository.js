import { BaseRepository } from "./baseRepository.js";
import { plataforma } from "../models/Plataforma.js";

export class plataformaRepository extends BaseRepository {
    constructor(){
        super(plataforma)
    }

async searchByName(name){
        return await this.model.find({
            name: {$regex: name, $options: "i"}
        })
    }
}