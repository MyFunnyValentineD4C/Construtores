class Pessoa {
    private nome: string;
    private idade: number;

   constructor();
   constructor(nome: string);
   constructor(nome: string, idade: number);
   constructor(nome: string = "", idade: number = 0)   {
    this.nome = nome;
    this.idade = idade;
   }

   public getNome(): string {
    return this.nome;
   }
}

const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa("André");
const pessoa3 = new Pessoa("Maria",  20);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);