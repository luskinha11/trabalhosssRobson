/*
Documentação técnica:

Este exemplo demonstra o uso de arrays (vetores) em JavaScript.
Um array é uma estrutura de dados utilizada para armazenar múltiplos 
valores em uma única variável. Cada elemento ocupa uma posição, 
identificada por um indice iniciado em zero.

Os exemplos podem demonstrar criação, acesso, alteração de valores, 
adição e remoção de elementos, além de percorrer o array utilizando estruturas 
de repetição ou métodos próprios da linguagem.
*/
var arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
var arrAnoNascimento = new Array(1998, 1975, 1991);
var arrPontos = [45, 117, 78];
arrPontos[1] = 71;
console.log(arrJogadores);
console.log(arrJogadores[1] + ' tem ' + arrPontos[1] + ' pontos.');