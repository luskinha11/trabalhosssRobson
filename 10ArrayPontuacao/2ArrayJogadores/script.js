/*
Documentação técnica:

Este exemplo demonstra o uso de arrays (vetores) em JavaScript.
Um array é uma estrutura de dados utilizada para armazenar múltiplos 
valores em uma única variável. Cada elemento ocupa uma posição, 
identificada por um indice iniciado em zero.

Os exemplos podem demonstrar criação, acesso, alteração de valores, 
adição e remoção de elementos, além de percorrer o array utilizando 
estruturas de repetição ou métodos próprios da linguagem.
*/

var arrRicardo = new Array('Ricardo', 1998, 45);
var arrMonica = new Array ('Monica', 1975, 71);
var arrLeonardo = new Array('Leonardo', 1991, 78);
var arrJogadores = new Array(arrRicardo, arrMonica, arrLeonardo);
console.log(arrJogadores);