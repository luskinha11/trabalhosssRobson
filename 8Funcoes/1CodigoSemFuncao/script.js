/*
Documentação técnica:

Este exemplo demonstra a criação e utilização de funções (métodos) em JavaScript.
Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.
Ela pode receber parâmetros, processar informações e retornar um resultado por
meio da instrução return.

Como mencionado antes, uma função é como uma máquina, você pode passar informações
para ela, chamamos essas informações em programação de parâmetros. 
A função vai manipular e tratar estes parámetros e depois vai devolver um novo valor.

Imagine que precisamos calcular a idade de uma pessoa e depois verificar 
se esta pessoa é maior de idade veja como ficaria este trecho de código no exemplo:

*/

var nomePessoa = "Lukinhaz";
var anoDeNascimento = 1540;
var idade = 2026 - anoDeNascimento;
if (idade >= 18) {
    console.log(nomePessoa + " é maior de idade.");
} else {
    console.log(nomePessoa + " é menor de idade.");
}
nomePessoa = "Luizito";
anoDeNascimento = 1200;
idade = 2018 - anoDeNascimento;
if (idade >= 18) {
    console.log(nomePessoa + " é maior de idade.");
} else {
    console.log(nomePessoa + " é menor de idade.");
}