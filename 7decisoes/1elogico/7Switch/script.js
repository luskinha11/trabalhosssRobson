var nome = "Luskinha";
var emprego = "desenvolvedor";

switch (emprego) {
    case "policial":
        console.log(nome + " é uma policial.");
        break;
    case "cozinheiro":
        console.log(nome + " é uma cozinheira.");
        break;
    case "desenvolvedor":
        console.log(nome + " é uma desenvolvedora.");
        break;
    case "lutador":
        console.log(nome + " é uma lutadora.");
        break;
    default:
        console.log(nome + " trabalha em outra coisa.");
}

if (emprego === "policial") {
    console.log(nome + " é uma policial.");
} else if (emprego === "cozinheiro") {
    console.log(nome + " é uma cozinheira.");
} else if (emprego === "desenvolvedor") {
    console.log(nome + " é uma desenvolvedora.");
} else if (emprego === "lutador") {
    console.log(nome + " é uma lutadora.");
} else {
    console.log(nome + " trabalha em outra coisa.");
}

/*

 Switch

 No exemplo temos a variavel nome com o nome de uma pessoa
  e uma outra variavel emprego com a informações
 no que esta pessoa trabalha.

 o case verifica se caso o valor da variavel emprego seja uma
 das opcões ali declaradas como policial, então executara o codigo
 logo abaixo.

 */