/*
Chamamos de notação a forma utilizada para retornar um valor de um objeto.

As duas formas possíveis de notação para retornar os valores de um objeto são 
a notação de ponto e a notação de colchetes, como visto no exemplo.

Sabendo agora como criar um objeto, podemos utilizar objetos para agrupar dados 
semelhantes, como de uma casa ou de um carro, de uma forma mais estruturada, algo 
que existe uma certa dificuldade quando utilizamos arrays para agrupar dados.

Podemos ver também no exemplo que criamos que as propriedades de um objeto aceitam 
diferentes tipos de dados como valores booleanos, numéricos e textos, porém quando 
trabalhamos com objetos, nós podemos ir além, como por exemplo utilizar objetos, 
arrays ou mesmo funções dentro de objetos, veja o exemplo:
*/

var carro = {
    extras: ['ar-condicionado', 'freios abs', 'som'],
    velocidade: 0,
    faroisLigados: false,
    ligarFarois: function () {
this.faroisLigados = true;
    },
    acelerar: function (velocidade) {
        this.velocidade += velocidade;
    },
    freiar: function () {
        this.velocidade = 0;
    }
}
carro.ligarFarois();
console.log('Farois ligados: ' + carro.faroisLigados);
carro.acelerar(50);
console.log('velocidade: ' + carro.velocidade);
carro.freiar();
console.log('Velocidade: ' + carro.velocidade);