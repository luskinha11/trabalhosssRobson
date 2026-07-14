/*

Documentação técnica:

Este exemplo demonstra a criação e utilização de funções em JavaScrip

Uma função é um bloco de código reutilizável, criado para executar um-específica. 
Ela pode receber parâmetros, processar informações e retom um resultado por meio da 
instrução return.

A lógica anterior funciona, porém imagine que tenhamos cinquenta pessoas, 
teríamos então que repetir estes trechos várias e várias vezes. Olhe como 
ficaria se utilizássemos uma função no exemplo.

Veja no novo código estamos fazendo os mesmos cálculos e verificações, 
porém colocamos toda a lógica dentro de uma função, evitando assim reescrever 
nosso código e o deixando mais limpo e organizando.

*/

function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if (idade >= 18) {
      return nomePessoa + " é maior de idade.";
    } else {
        return nomePessoa + " tem menos de 18 anos."
    }
}

var nome = "Joana";
var nascimento = 2002;
console.log(verificarIdade(nome, nascimento));

console.log(verificarIdade("Cassiano", 1988));

nome = "John";
nascimento = 1978;
var texto = verificarIdade(nome, nascimento);
console.log(texto);
