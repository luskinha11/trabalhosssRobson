/*
Veja que neste exemplo, como no anterior, nós adicionamos a 
disciplina Português como a primeira informação do array, porém 
agora que a disciplina Francês vai sair desta ementa, utilizamos 
a função pop na linha 3 para remover a última posição do arrEmenta 
e logo após na linha 4 realizamos um log no console do navegador.

A função pop consiste em remover a última posição de um array, 
utilizemos o último exemplo como base, veja:
*/

var arrEmenta = new Array('Matemática', 'Artes', 'Frances');
arrEmenta.unshift('Portugues');
arrEmenta.pop();
console.log(arrEmenta);
