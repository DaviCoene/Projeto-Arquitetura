export class GeneroDTO {
    constructor(genero) {
        this.id = genero._id;
        this.nome = genero.nome;
        this.createdAt = genero.createdAt;
        this.updatedAt = genero.updatedAt;
    }

    static fromRequest(body) {
        return {
            nome: body.nome
        };
    }
}
