export class Produto
{
    id: string;
    nome: string;
    valor: string;
    promocao: boolean;
    valorPromo: string;
    imagem: string;
    
    constructor(Id: string)
    {
        this.id = Id;
        this.nome = "";
        this.valor = "";
        this.promocao = false;
        this.valorPromo = "";
        this.imagem = "";
    }
}