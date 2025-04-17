
import { UserRepository } from "../repositories/userRepository.js";
import { UserDTO } from "../dtos/userDTO.js";

export class UserService{
    constructor(){
        this.UserRepository = new UserRepository();
    }

    createUser = async (UserData) => {
        const User = UserDTO.fromRequest(UserData);
        return await this.UserRepository.create(User);
    }

    getAllUser = async () => {
        return await this.UserRepository.findAll();
    }
    getUserById = async (id) => {
        const foundUser = await this.UserRepository.findById(id);
        if (!foundUser){
            throw new Error("User não encontrado!")
        }
        return foundUser
    }
    updateUser = async (id, UserData) => {
        const updatedUser = await this.UserRepository.update(id, UserData);
        if (!updatedUser){
            throw new Error("Autor não encontrado!")
        }
        return updatedUser
    }
    deleteUser = async (id) => {
        const deleteUser = await this.UserRepository.delete(id);
        if (!deleteUser){
            throw new Error("Autor não encontrado!")
        }
        return deleteUser
    }

    // searchAutorByName = async (name) =>{
    //     if(!name || name.trim() === ""){
    //         throw new Error("Informar o nome do Autor")
    //     }
    //     return await this.UserRepository.searchByName(name)
    // }

}
