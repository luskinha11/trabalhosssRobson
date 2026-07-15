/*
Documentação técnica:
Este exemplo demonstra a criação e utilização de funções em JS.
Uma função é um bloco de código reutilizavel, criado para executar uma tarefa
especifica. Ela pode receber parametros, processar informações e retornar
um resultado por meio da instrução return.

Uma função tbm pode chamar outra função e uma função não
precisa necessariamente retornar um resultado.
*/

function verificarIdade(nomePessoa, anoDeNascimento) {
    var idade = 2018 - anoDeNascimento;
    if (idade >= 18) {
        console.log(nomePessoa + " é maior de idade.");
    } else {
        console.log(nomePessoa + " tem menos de 18 anos.");
    }
}

var nome = "Lukinhazzz";
var nascimento = 2002;
verificarIdade(nome, nascimento);

verificarIdade("Cassiano", 1988);

nome = "John";
nascimento = 1978;
verificarIdade(nome, nascimento);
