var numeroCarros = 6;
var todosCarrosMesmaMarca = false;

if (numeroCarros > 5 || todosCarrosMesmaMarca === true) {
    console.log("Ou todos os carros são da mesma marca.");
    console.log("Ou temos cinco carros.");
    console.log("Ou as duas coisas juntas");

} else {
    console.log("Não temos cinco carros e nem todos são da mesma marca.");
}

/*
Tabela Verdade

Quando falamos sobre lógica booleana é muito importante mencionar a
tabela verdade, que utilizamos para entender corretamente o operador ||
(OU loógico).

|  A  |  B  | A || B |
|TRUE | TRUE | TRUE  |
|TRUE | FALSE| TRUE  |
|FALSE| TRUE | TRUE  |
|FALSE| TRUE | TRUE  |
|FALSE| TRUE| TRUE   |

Já a tabela verdade do operador || (OU lógico), a decisão lógica
terá um retorno verdadeiro se pelo menos uma das decisões lógicas
retornar verdadeiro ( true ).

*/
