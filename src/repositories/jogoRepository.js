import { BaseRepository } from "./baseRepository.js";
import { jogo } from "../models/Jogo.js";

export class jogoRepository extends BaseRepository {
    constructor(){
        super(jogo)
    }


}