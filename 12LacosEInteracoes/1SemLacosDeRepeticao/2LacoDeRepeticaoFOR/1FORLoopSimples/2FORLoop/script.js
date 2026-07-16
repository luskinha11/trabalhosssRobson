/*
Documentação técnica:

Na linha 1 criamos um array chamado nomes com o nome de alguns personagens.

Na linha 3 criamos um laço de repetição, iniciando o contador com o valor da 
propriedade length do array nomes, criamos a condição que enquanto i for maior 
ou igual a 0, será executado o bloco de código do laço de repetição, após executar 
o bloco de código do for, ao invés de incrementar, decrementamos o valor do contador 
com a operação i-, após realizar o decremento será novamente checado a condição definida, 
enquanto a condição não retornar falso, seguirá executando o bloco de código do laço de 
repetição for
*/

var nomes = ['João', 'Maria', 'Aurora', 'Branca', 'Malevola'];

for (var i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}