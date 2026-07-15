var objetoCarro = {
    modelo: '147',
    numero: 4,
    marca: 'Fiat',
    numeroPortas: 2
}

var objetoCasa = new Object();
objetoCasa.numeroComodos = 5;
objetoCasa.valorImovel = 522300.320;
objetoCasa['aluguel'] = false;
objetoCasa['venda'] = true;

objetoCarro.numeroPortas = 4;
var umIdentificadorDeCasa = 'valorImovel';

console.log(objetoCarro);
console.log(objetoCarro.modelo);
console.log(objetoCasa['valorImovel']);
console.log(objetoCasa[umIdentificadorDeCasa]);
