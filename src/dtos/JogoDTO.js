//Data Transfer Object
export class JogoDTO{
    constructor(Jogo){
        this.id = Jogo._id;
        this.titulo = Jogo.titulo;
        this.descricao = Jogo.descricao;
        this.data_lançamento = Jogo.data_lançamento;
        this.preco = Jogo.preco;
        this.createdAt = Jogo.createdAt;
        this.updateAt = Jogo.updatedAt;
    }

    static fromRequest(body){
        return{
            id: body.id,
            titulo: body.titulo,
            descricao: body.descricao,
            data_lançamento: body.data_lançamento,
        };
    }
}