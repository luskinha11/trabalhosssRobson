/*
Documentação técnica:

WHILE

Diferente do laço de repetição for, o laço de repetição while tem uma 
estrutura diferente onde não há um local definido para um contador ou incremento, vejamos:

while (condição) {

...lógica...

10

Condição

A condição do laço de repetição while não se limita a utilizar um contador, pois 
pode ser utilizado qualquer tipo de Decisão lógica, vista anteriormente, para a definição 
de sua condição, como a comparação de textos, comparação de valores booleanos ou qualquer outra.

Lógica

O código que será executado enquanto a condição de laço de repetição retornar verdadeiro, caso o loop encerrará.

vejamos o exemplo:

*/

var nomes = ['Soluço', 'Astrid', 'Melequento', 'Perna de peixe', 'Bocão'];
var nomePesquisado = null;
var i = 0;
while (nomePesquisado == null && i < nomes.length) {
    if (nomes[i] == 'Melequento') {
         nomePesquisado = nomes[1];
    } else {
        console.log(nomes[1] + ' não é o nome pesquisado');
    }
i++;
}
console.log('Nome encontrado ' + nomePesquisado);