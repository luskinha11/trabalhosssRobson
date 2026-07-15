/*
Documentação tecnica:

Veja que neste exemplo criamos um array com inicialmente 
três disciplinas, sendo a primeira Matematica, entretanto na 
linha 2 utilizamos o métodos unshift para adicionar a disciplina 
Portugués antes de Matemática e na linha 3 fazemos um log deste 
array no console do navegador, podemos ver que agora a disciplina 
Portugués é a primeira informação do arrEmenta e a disciplina Matemática passou a ser a segunda.

A função unshift consiste em adicionar um valor, variável ou objeto 
na primeira posição de um array, fazendo assim todos os outros valores 
avançarem uma casa a frente, vaja o exemplo:
*/

var arrEmenta = new Array('Matemática', 'Artes', 'Frances');
arrEmenta.unshift('Portugues');
console.log(arrEmenta);