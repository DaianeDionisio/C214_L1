const validate = require('validate.js');
const validaNumero = require('./validate');

const Calculadora = {
    soma(variavel1, variavel2) {
        let validateNumber;
        validateNumber = validate({ variavel1, variavel2 }, validaNumero.ValidaNumero);
        if (validateNumber !== undefined) return "Error";
        
        return variavel1 + variavel2;
    },

    subtracao(variavel1, variavel2) {
        let validateNumber;
        validateNumber = validate({ variavel1, variavel2 }, validaNumero.ValidaNumero);
        if (validateNumber !== undefined) return "Error";

        return variavel1 - variavel2;
    },

    multipliacao(variavel1, variavel2) {
        let validateNumber;
        validateNumber = validate({ variavel1, variavel2 }, validaNumero.ValidaNumero);
        if (validateNumber !== undefined) return "Error";

        return variavel1 * variavel2;
    },

    divisao(variavel1, variavel2) {
        let validateNumber;
        validateNumber = validate({ variavel1, variavel2 }, validaNumero.ValidaNumero);
        if (validateNumber !== undefined) return "Error";
    },

    exponenciacao(variavel1, variavel2) {
        let validateNumber;
        validateNumber = validate({ variavel1, variavel2 }, validaNumero.ValidaNumero);
        if (validateNumber !== undefined) return "Error";

        return variavel1 ** variavel2;
    }
}

module.exports = Calculadora;