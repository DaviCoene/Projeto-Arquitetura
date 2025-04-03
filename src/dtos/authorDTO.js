//Data Transfer Object
export class AuthorDTO{
    constructor(author){
        this.id = author._id;
        this.name = author.name;
        this.email = author.email;
        
    }

    static fromRequest(body){
        return{
            id: body.id,
            name: body.name,
            email: body.email,
        };
    }
}