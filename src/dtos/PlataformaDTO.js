//Data Transfer Object
export class PlataformaDTO{
    constructor(Plataforma){
        this.id = Plataforma._id;
        this.nome = Plataforma.nome;
        this.createdAt = Plataforma.createdAt;
        this.updateAt = Plataforma.updatedAt;
    }

    static fromRequest(body){
        return{
            id: body.id,
            nome: body.nome
        };
    }
}