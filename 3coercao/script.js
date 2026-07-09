var variavelTexto = "texto";
var variavelNumero1 = 23;
var variavelNumero2 = 11;

console.log(variavelTexto + variavelNumero2); 
console.log(variavelNumero1 + variavelNumero2);



/* Coerção

Na linguagem JavaScript há uma propriedade que está
dentro da tipagem dinamica que se chama coerção. Em certos
casos, como a soma de duas variáveis, ou alguma outra
operação, que veremos mais para frente, contendo tipos de
dados distintos. Esta propriedade tenta descobrir o tipo de dado
qua as variaveis devem ter para que alguma operação seja
executada corretamente, quando necessario, e possivel, esta
propriedade tentará converter o valor das variaveis.

Isto não ocorrerá sempre, pois ao somar duas variáveis
 do tipo numérico o resultado será a soma aritmética dos valores. 
 Entretanto ao tentar somar uma variável do tipo texto e uma variável 
 do tipo numérico o resultado será a concatenação dos textos, neste caso 
 a linguagem converteu a variável do tipo numérico para o tipo texto, 
 pois não faz sentido realizar uma operação aritmética entre
  um texto e um número. */