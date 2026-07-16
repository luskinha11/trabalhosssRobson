/*
Documentação técnica:

Break

A declaração break é uma palavra reservada, uma ferramenta por assim dizer, 
que nos ajuda a manipular o fluxo do laço de repetição o encerrando quando 
declaramos esta palavra reservada.

Imagine que a guarda costeira está a procura de um tubarão na costa de uma praia 
turística, vamos usar este cenário para criar um laço de repetição.
*/

var animaisMarinhos = ['peixe', 'baleia', 'golfinho', 'tubarão', 'lula'];
for (var i = 0; i < animaisMarinhos.length; i++) {
    if (animaisMarinhos[i] == 'tubarão') {
        console.log(animaisMarinhos[1] + 'encontrado.');
    break;
    } else {
        console.log('Procurar animal marinho.');
    }
}