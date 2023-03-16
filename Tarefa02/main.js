const Calculadora = require('./calculadora');

let variavel1 = 2;
let variavel2 = 3;

let somaErro = Calculadora.soma(variavel1,true);
let somaOk = Calculadora.soma(variavel1, variavel2); 
let subtracaoErro = Calculadora.subtracao('abc', variavel2);
let subtracaoOk = Calculadora.subtracao(variavel2,variavel1);
let multipliacaoErro = Calculadora.multipliacao(variavel1, false);
let multipliacaoOk = Calculadora.multipliacao(variavel2,variavel1);
let divisaoErro = Calculadora.divisao(variavel1, false);
let divisaoOk = Calculadora.divisao(variavel2,variavel1);
let exponenciacaoErro = Calculadora.exponenciacao(variavel1, false);
let exponenciacaoOk = Calculadora.exponenciacao(variavel2,variavel1);

console.log(somaErro);
console.log(somaOk);
console.log(subtracaoErro);
console.log(subtracaoOk);
console.log(multipliacaoErro);
console.log(multipliacaoOk);
console.log(divisaoErro);
console.log(divisaoOk);
console.log(exponenciacaoErro);
console.log(exponenciacaoOk);