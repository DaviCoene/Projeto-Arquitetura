import { PlataformaDTO } from "../dtos/PlataformaDTO.js";
import plataformaService from "../services/plataformaService.js";

class PlataformaController {
    constructor() {
        this.plataformaService = new plataformaService();
    }

    getAllPlataforma = async (req, res) => {
        try {
            const listaPlataformas = await this.plataformaService.getAllPlataforma();
            res.status(200).json(listaPlataformas.map(Plataforma => new PlataformaDTO(Plataforma)));
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    getPlataformaById = async (req, res) => {
        try {
            const Plataforma = await this.plataformaService.getPlataformaById(req.params.id);
            if (!Plataforma) {
                return res.status(404).send("Plataforma não encontrado");
            }
            res.status(200).json(new PlataformaDTO(Plataforma));
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    createPlataforma = async (req, res) => {
        try {
            const novoPlataforma = await this.plataformaService.createPlataforma(req.body);
            res.status(201).json({
                message: "Plataforma criado com sucesso",
                Plataforma: new PlataformaDTO(novoPlataforma)
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    updatePlataforma = async (req, res) => {
        try {
            const PlataformaAtualizado = await this.plataformaService.updatePlataforma(req.params.id, req.body);
            if (!PlataformaAtualizado) {
                return res.status(404).send("Plataforma não encontrado");
            }

            res.status(200).json({
                message: "Plataforma atualizada com sucesso",
                Plataforma: new PlataformaDTO(PlataformaAtualizado)
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    deletePlataforma = async (req, res) => {
        try {
            const PlataformaRemovido = await this.plataformaService.deletePlataforma(req.params.id);
            if (!PlataformaRemovido) {
                return res.status(404).send("Plataforma não encontrado");
            }

            res.status(200).json({ message: "Plataforma deletada com sucesso" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    searchPlataformaByName = async(req, res) =>{
        try{
            const {name} = req.params;
            const Plataformas = await this.plataformaService.searchPlataformaByName(name);
            if(Plataformas.lenght === 0){
                return res.status(404).json({
                    message: "Não encontrado",
                    name: name,
            });
        }
            res.status(200).json(Plataformas.map((Plataforma) => new PlataformaDTO(Plataforma)));
        }
        catch(error){
            res.status(404).send(error.message)
        }
    };
}

export default PlataformaController;
