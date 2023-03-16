class veiculo {
    placa;
    ano;

    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(novaPlaca) {
        this.placa = novaPlaca;
    }

    setAno(novoAno) {
        this.ano = novoAno;
    }

    getPlaca() {
        return this.placa;
    }

    getAno() {
        return this.ano;
    }

    exibirDados() {
        console.log('O veículo possui a placa', this.placa, 'e é do ano', this.ano);
    }
}

class caminhao extends veiculo {
    eixos;

    constructor(placa, ano, eixos) {
        super(placa, ano);
        this.eixos = eixos;
    }

    setEixos(novosEixos) {
        this.eixos = novosEixos;
    }

    getEixos() {
        return this.eixos;
    }

    exibirDados() {
        console.log('O veículo possui a placa', this.placa, ', é do ano', this.ano, 'e possui os eixos:', this.eixos);
    }
}

class onibus extends veiculo {
    assentos;

    constructor(placa, ano, assentos) {
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(novosAssentos) {
        this.assentos = novosAssentos;
    }

    getAssentos() {
        return this.assentos;
    }

    exibirDados() {
        console.log('O veículo possui a placa', this.placa, ', é do ano', this.ano, 'e possui', this.assentos, 'assentos.');
    }
}

let Onibus = new onibus('PZU2573',2017,83);
Onibus.exibirDados();


