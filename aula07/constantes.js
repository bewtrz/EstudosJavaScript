// NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS
// NÃO PODEMOS MODIFICAR O VALOR DE UMA CONSTANTE
// CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS 
// NÃO PODE COMEÇAR O NOME DE UMA CONSTANTE COM NÚMERO
// NÃO PODE CONTER ESPAÇOS OU TRAÇOS 
// UTILIZAR O camelCase
// CASE-SENSITIVE
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'beatriz'  // const não podem ser alteradas igual a let
console.log(nome);

/* const primeiroNumero = 10;
const segundoNumero = 5;
const resultado = primeiroNumero * segundoNumero
console.log(resultado);
const resultadoDiferente = resultado * 2;
console.log(resultadoDiferente);

let teceiroResultado = resultadoDiferente * 10;
console.log(teceiroResultado);
teceiroResultado = 5;
console.log(teceiroResultado); */

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); //saber o tipo da variável
console.log(typeof nome);

console.log(primeiroNumero + segundoNumero); //soma
console.log(nome + segundoNumero); //concatenação 




