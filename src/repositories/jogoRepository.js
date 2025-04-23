import { BaseRepository } from "./baseRepository.js";
import { jogo } from "../models/jogo.js";

export class jogoRepository extends BaseRepository {
    constructor(){
        super(jogo)
    }

    async searchByName(name){
        return await this.model.find({
            name: {$regex: name, $options: "i"}
        })
    }
}