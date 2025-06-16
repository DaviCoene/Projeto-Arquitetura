import { GeneroDTO } from "../dtos/GeneroDTO.js";
import { GeneroService } from "../services/generoService.js";

class GeneroController {
    constructor() {
        this.generoService = new GeneroService();
    }

    getAllGenero = async (req, res) => {
        try {
            const listaGeneros = await this.generoService.getAllGenero();
            res.status(200).json(listaGeneros.map(genero => new GeneroDTO(genero)));
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    getGeneroById = async (req, res) => {
        try {
            const genero = await this.generoService.getGeneroById(req.params.id);
            if (!genero) {
                return res.status(404).send("Gênero não encontrado");
            }
            res.status(200).json(new GeneroDTO(genero));
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    createGenero = async (req, res) => {
        try {
            const novoGenero = await this.generoService.createGenero(req.body);
            res.status(201).json({
                message: "Gênero criado com sucesso",
                genero: new GeneroDTO(novoGenero)
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    updateGenero = async (req, res) => {
        try {
            const generoAtualizado = await this.generoService.updateGenero(req.params.id, req.body);
            if (!generoAtualizado) {
                return res.status(404).send("Gênero não encontrado");
            }

            res.status(200).json({
                message: "Gênero atualizado com sucesso",
                genero: new GeneroDTO(generoAtualizado)
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    deleteGenero = async (req, res) => {
        try {
            const generoRemovido = await this.generoService.deleteGenero(req.params.id);
            if (!generoRemovido) {
                return res.status(404).send("Gênero não encontrado");
            }

            res.status(200).json({ message: "Gênero deletado com sucesso" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    searchGeneroByName = async(req, res) =>{
        try{
            const {name} = req.params;
            const generos = await this.generoService.searchGeneroByName(name);
            if(generos.lenght === 0){
                return res.status(404).json({
                    message: "Não encontrado",
                    name: name,
            });
        }
            res.status(200).json(generos.map((genero) => new GeneroDTO(genero)));
        }
        catch(error){
            res.status(404).send(error.message)
        }
    };
}

export default GeneroController;
