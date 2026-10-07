class ProdutoJequiti {
    constructor (
    private nome: String,
    private preco: number
    ) {}
    public exibirInformarcoes() {
        return this.nome, this.preco;
    }
}

const Americanas = new ProdutoJequiti ( 
    "Creme para Pele",
    25
);

console.log (Americanas);