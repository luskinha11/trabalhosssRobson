/*
Documentação técnica:
Este exemplo demonstro o uso de estruturas de decisão em JavaScript.
As instru
*/

var variavelCoercao = 37;
var variavelSemCoercao = 37;

if (variavelCoercao == "37") {
    console.log("Comparação com coerção.")
}

if (variavelSemCoercao === "37") {
    console.log("Este trecho não será executado, sem coerção")
}







/*

igualdade Coerção

Vendo o exemplo, a primeira decimo lógica retornará verdadeiro, pois ao realizar
 a operação de == (Igualdade) a linguagem automaticamente tentou converter o valor
  de ambas as variáveis para o mesmo tipo de dado para efetuar a comparação, 
  retornando assim verdadeiro pois ambos os valores são 37.

Entretanto ao vermos a segunda decisão lógica, vemos o operador (Igualdade Restrita) 
tentando comparar o valor da variável com o texto 37, o que retornará falso, pois sem 
a coerção de dados não é possível um retorno verdadeiro ao comparar dois tipos de dados diferentes.

Normalmente tenha como orientação utilizar o operador === (Igualdade Restrita) 
ao compararmos variáveis em nosso código. A importância de mencionar isto é porque 
normalmente realizar comparação apenas com == pode acabar causando dificuldade em 
encontrar problemas em nossos códigos no futuro, sendo assim utilizar se torna mais seguro, 
porém mais restrito.

este exemplo demonstra o uso de estruturas de decisão em Javascript, 
as isntruções if, else if e else permitem executar blocos diferentes conforme 
o resultado de Expressoes logicas. as condiçoes retornam true e false e orientam o 
fluxo de execução do programaaaaaaaaaa

*/