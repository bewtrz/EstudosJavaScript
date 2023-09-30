/* ARITMÉTICOS 
() tudo que estiver dentro do parêntese aumenta a precedência 
+ Adição e concatenação  // entre numbrs se faz a soma
- / *                   // entre numbrs e strings se faz a concatenação
** Potenciação 
% Resto da divisão
Incremento = ++
Decremento = --
*/

// NaN - Not a Number 

const num1 = 10; 
const num2 = 5; 
const result = num1 + num2
console.log(result);



const num3 = 10;
const num4 = 50;
const result2 = (num3 * num2) + num4; //quando quiser que ele faça uma operação primeiro, colocar entre parênteses.
console.log(result2);

let contador = 1;
/*contador ++; //primeiro ele ler o valor dps incrementa
++ contador; //primeiro ele encrementa dps soma
console.log(contador);*/

//OPERADORES DE INCREMENTO
console.log(contador++); //primeiro incrementa 
console.log(contador); //dps mostra a soma

//OPERADORES DE DECREMENTO 
let contador1 = 10;
contador1--;
console.log(contador1);

const passo = 5;
let contador2 = 0;

contador2 = passo + contador2
console.log(contador2);
contador2 = passo + contador2
console.log(contador2);
contador2 = passo + contador2
console.log(contador2);

//OPERADORES DE ATRIBUIÇÃO 
let contador4 = 2;
contador4 += 2; // contador4 = contador4 + 2 
console.log(contador4);

//CONVERTENDO UMA STRING EM NUMBER -- pode usar um 'number('10')
const numero1 = parseInt('10');   //FUNÇÃO - PARSEINT (Faz a conversão para inteiro)
const numero2 = 20;
const resultados = numero1 * numero2
console.log(resultados);

const numero3 = 5;
const numero4 = parseFloat(2.5); // FUNÇÃO - PARSEFLOAT (Ler números com pontos flutuantes, com casas decimais)
console.log(resu = numero3 + numero4);


/* parseInt(inteiro), parseFloat(decimais), Number(transforma em numero sem fazer distinção de tipo)
*/

