import promptSync from 'prompt-sync';

class ContaBancaria {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public depositar(valorDeposito: number): void {
        this.saldo += valorDeposito;
    }

    public sacar(valorSaque: number): void {
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

const conta = new ContaBancaria("001", 100);

const ler = promptSync();

let systemRunning = 1;

while (systemRunning === 1) {

    console.log("Banco");
    console.log("1 - Consultar Saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

    let opcao: number = Number(ler("Prossiga: "));

    switch (opcao) {
    case 1:
    console.log("Seu saldo: R$ ", conta.getSaldo());
    break;

    case 2:
    const valorDeposito = Number(
    ler("Quanto você gostaria de depositar? "));
    conta.depositar(valorDeposito);
    console.log("Você depositou: R$ ", valorDeposito);
    console.log("Seu saldo: R$ ", conta.getSaldo());
    break;

    case 3:
    const valorSaque = Number(
    ler("Quanto você gostaria de sacar? "));

    conta.sacar(valorSaque);

    console.log("Você sacou: R$ ", valorSaque);
    console.log("Seu saldo: R$ ", conta.getSaldo());
    break;

    case 4:
    console.log("Encerrando.");
    systemRunning--;
    break;

    default:
    console.log("Opção inválida.");
    }
}