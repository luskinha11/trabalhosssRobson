function verificarMaiorIdade(nome, idadePessoa) {
    if (idadePessoa >= 18) {
        return nomePessoa + " é maior da idade."
    } else {
        return nomePessoa + " tem menos de 18 anos."
    }
}

function verificarIdade(nomePessoa, idade) {
    var idade = 2018 - anoDeNascimento;
    var mensagemRetorno = verificarIdade (nomePessoa, idade);
    console.log(mensagemRetorno);
}

var nome = "Joana";
var nascimento = 2002;
verificarIdade(nome,nascimento);

verificarIdade("Cassiano", 1988);

nome = "John"
nascimento = 1978;

verificaridade (nome, nascimento);