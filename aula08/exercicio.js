//INFORMAÇÕES QUE DEVE CONTER A FRASE
/* 'nome' 'sobrenome' tem 'idade' anos, e 'peso' kg, tem 'altura' de altura e seu imc é de 'imc' */
//formula do IMC é peso / (altura * altura)
//deve conter o ano de nascimento também 



const nome = 'beatriz dos santos';
const sobrenome = 'rodrigues';
const idade = 24;
const peso = 52;
const altura = 1.65;

let imc;
let anoNascimento;

imc = peso / (altura * altura);
console.log(imc);

anoNascimento = 2023 - idade
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos. pesa', peso,'kg, e tem', altura,'de altura e seu IMC é de',imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);


