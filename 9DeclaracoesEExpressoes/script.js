/* Documentação técnica:

Este exemplo apresenta a diferença entre declarações e expressões em JavaScript. 
Uma declaração define ações ou estruturas da linguagem, enquanto uma expressão 
produz um valor que pode ser utilizado em atribuições, comparações, chamadas de 
funções ou outras operações.

Uma questão que ainda não vimos é a diferença entre uma declaração (statement) 
e uma expressão (expression). A grande diferença entre uma expressão e uma 
declaração é que uma expressão produz um valor, uma saida que pode ser armazenada, 
enquanto uma declaração apenas executa uma ação, não gera um valor imediatamente 
para poder ser armazenado.

*/

// Declaração (Statement)
function minhaFuncao(param1) {
    console.log("Executa uma ação");
}
if (1 !== 2) {
    console.log("Um IF é uma declaração");
}
console.log(minhaFuncao);

//Expressão (Expression)
var minhaOutraFuncao = function (param1) {
    console.log("Executa outra ação");
}
console.log(minhaOutraFuncao);

// Uma soma é uma expressão
var soma = 5 + 7;
console.log("Valor armazenado na variavel 'soma': " + soma);
