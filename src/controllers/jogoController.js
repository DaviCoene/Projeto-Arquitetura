import { JogoDTO } from "../dtos/JogoDTO.js";
import { JogoService } from "../services/jogoService.js";

class JogoController{
    constructor(){
        this.JogoService = new JogoService()
    }
    getAllJogo = async(req, res) =>{
        try{
            const listJogos = await this.JogoService.getAllJogo();
            res.status(200).json(listJogos.map((Jogo) => new JogoDTO(Jogo)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    
    createJogo = async (req, res)=>{
        try{
            const newJogo = await this.JogoService.createJogo(req.body);
            
            res.status(201).json({
                message: "Jogo Criado com sucesso",
                Jogo: new JogoDTO(newJogo),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };

    
    // getJogoById = async (req, res) =>{
    //     try{
    //         const JogoById = await this.JogoService.getJogoById(req.params.id);
    //         if (!JogoById){
    //         return res.status(404).send("Jogo não encontrado")
    //         }
    //         res.status(200).json(new JogoDTO(JogoById))
            
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // };

    // searchJogoByName = async(req, res) =>{
    //     try{
    //         const {name} = req.params;
    //         const Jogos = await this.JogoService.searchAutorByName(name);
    //         if(Jogos.lenght === 0){
    //             return res.status(404).json({
    //                 message: "Não encontrado",
    //                 name: name,
    //         });
    //     }
    //         res.status(200).json(Jogos.map((Jogo) => new JogoDTO(Jogo)));
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // };
    
    // // getJogoByName = async (req, res) =>{
    // //     try{
    // //         const JogoById = await this.JogoService.getJogoByName(req.params.id);
    // //         if (!JogoById){
    // //         return res.status(404).send("Jogo não encontrado")
    // //         }
    // //         res.status(200).json(new JogoDTO(JogoById))
            
    // //     }
    // //     catch(error){
    // //         res.status(500).send(error.message)
    // //     }
    // // };
    // // static async deletedJogo(req, res){
    // //     try{
    // //         const deletedJogo = await Jogo.findByIdAndDelete(req.params.id);
    // //         if (!deletedJogo){
    // //         return res.status(404).send("Jogo não encontrado")
    // //         }
    // //         res.status(200).json(deletedJogo)
    // //     }
    // //     catch(error){
    // //         res.status(500).send(error.message)
    // //     }
    // // }
    
    // updateJogo = async (req, res) =>{
    //     try{
    //         const updateJogo = await this.JogoService.updateJogo(req.params.id, req.body, {
    //             new: true,
    //         });
    //         if (!updateJogo){
    //         return res.status(404).send("Jogo não encontrado")
    //         }
    
    //         res.status(201).json({
    //             message: "Jogo Criado com sucesso",
    //             Jogos: new JogoDTO(updateJogo),
    //         }
    //         )
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }

    // deletedJogo = async (req, res) =>{
    //     try{
    //         const deleteJogo = await this.JogoService.deleteJogo(req.params.id);
    //         if (!deleteJogo){
    //         return res.status(404).send("Jogo não encontrado")
    //         }
    
    //         res.status(200).json("Autor deletado"
    //         )
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }
    
    }


//export default JogoController;
export default new JogoController();