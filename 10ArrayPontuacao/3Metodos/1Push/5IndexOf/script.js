/*
Documentação técnica:

Veja o exemplo, recebemos uma informação do garçom que o cliente que pediu o prato 
é alérgico a Arroz, então na linha 3 criamos uma decisão lógica para verificar se o 
alimento Arroz existe dentro da variável arrPrato, como neste caso a decisão lógica 
retornará verdadeiro, pois retornará e que é diferente de 1, porque existe realmente 
Arroz no prato, na linha 4 removemos o alimento Arroz do array e na linha 6 realizamos 
um log da variável arrPrato no console do navegador.

O método indexOf é muito útil, ele consiste em retornar a posição de um certo valor, 
caso ele exista, caso contrário ele retornará -1, utilizemos o exemplo de prato de comida 
como base, veja:
*/
var arrPrato = new Array('Arroz', 'Tomate', 'Alface')
arrPrato.push('Feijão');
if (arrPrato.indexOf('Arroz') !== -1) {
    arrPrato.shift();
}
