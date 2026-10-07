class Carro {
    constructor (
        private placa: string,
        private marca: string
    ) {}
}

class Animal {
    constructor(
        private tamanho: number,
        private cor: string
    ) {}
}

class Consulta {
    constructor (
        private data: string,
        private nomePaciente: string,
        private nomeDoutor:string
    ) {}
}

const consulta = new Consulta(
    "07/10/2026",
    "João",
    "Dra. Ana"
);