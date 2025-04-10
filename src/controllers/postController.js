import { PostDTO } from "../dtos/postDTO.js";
import { PostService } from "../services/PostService.js";

class PostController{
    constructor(){
        this.PostService = new PostService()
    }
    getAllPost = async(req, res) =>{
        try{
            const listPosts = await this.PostService.getAllPost();
            res.status(200).json(listPosts.map((Post) => new PostDTO(Post)));
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }

    
    createPost = async (req, res)=>{
        try{
            const newPost = await this.PostService.createPost(req.body);
            
            res.status(201).json({
                message: "Post Criado com sucesso",
                Post: new PostDTO(newPost),
            }
            )
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
    };
    getPostById = async (req, res) =>{
        try{
            const PostById = await this.PostService.getPostById(req.params.id);
            if (!PostById){
            return res.status(404).send("Post não encontrado")
            }
            res.status(200).json(new PostDTO(PostById))
            
        }
        catch(error){
            res.status(500).send(error.message)
        }
    };

    // searchPostByName = async(req, res) =>{
    //     try{
    //         const {name} = req.params;
    //         const Posts = await this.PostService.searchAutorByName(name);
    //         if(Posts.lenght === 0){
    //             return res.status(404).json({
    //                 message: "Não encontrado",
    //                 name: name,
    //         });
    //     }
    //         res.status(200).json(Posts.map((Post) => new PostDTO(Post)));
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // };
    
    // updatePost = async (req, res) =>{
    //     try{
    //         const updatePost = await this.PostService.updatePost(req.params.id, req.body, {
    //             new: true,
    //         });
    //         if (!updatePost){
    //         return res.status(404).send("Post não encontrado")
    //         }
    
    //         res.status(201).json({
    //             message: "Post Criado com sucesso",
    //             Posts: new PostDTO(updatePost),
    //         }
    //         )
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }

    // deletedPost = async (req, res) =>{
    //     try{
    //         const deletePost = await this.PostService.deletePost(req.params.id);
    //         if (!deletePost){
    //         return res.status(404).send("Post não encontrado")
    //         }
    
    //         res.status(200).json("Autor deletado"
    //         )
    //     }
    //     catch(error){
    //         res.status(500).send(error.message)
    //     }
    // }
    
    }


//export default PostController;
export default new PostController();