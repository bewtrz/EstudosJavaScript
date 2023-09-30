// FUNÇÕES 

/* alert(); ou window.alert(); Aparece a msg no navegador.
   window.confirm(); Confirmar alguma mensagem retornando false ou true.
   window.prompet(); Cria um campo para o usuario digitar (parecido com um input).
*/

//EXERCICIO - 
//Peça para o usuario inserir dois números, faça a soma entre eles e
//mostre o resultado na tela 


/*let numero1 = prompt('Insira um número: ');
let numero2 = prompt('Insira outro número: ');
//console.log(numero1, numero2)

numero1 = Number(numero1);
numero2 = Number(numero2);

resultado = numero1 + numero2;
console.log(`o resultado da soma dos dois numeros foi de: ${resultado}`)
//alert(`o resultado foi de: ${resultado} `)
alert(`o resultado foi de: ${numero1 + numero2}`) // fazendo a soma de forma direta(não é recomendado para codigos mais complexos)

*/

//EXERCICIO 02 - 
//faça 3 variaveis(A,B,C) que o valor de A = B, o valor de B = C, o valor de C = A. e depois prints elas na tela.

let varA = 'a'; //B
let varB = 'b'; //C
let varC = 'c'; //A

const varAtemp = 'a';
varA = varB; // = B
varB = varC; // = C
varC = varAtemp; // = A


console.log(varA, varB, varC)

