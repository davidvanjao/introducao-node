console.log('Ola, mundo!');

//definicao de variaveis
let nome = 'David';
let idade = 29
let altura = 1.69

//concatenacao
console.log(nome, ' tem ', idade);
console.log(nome + ' tem ' + idade + ' anos e ' + altura + ' de altura.');
console.log(`Nome: ${nome} - idade: ${idade} - altura: ${altura}`);

//if ternario
console.log('O nome e David?' + (nome === 'David') ? 'Sim' : 'Não');

//tipo de variavel
console.log(
    'vNome: ' + typeof(nome) + '\n' + 
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n'
);

//definicao de objeto
let endereco = {
    "rua": "Brasil",
    "num": 108,
    "bairro": "centro",
    "cidade": "tupa",
    "uf": "SP",
    "mora": true

}

//definicao array com 2 dimencoes
let velha = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
];

console.log(endereco)
console.log('vEndereco: ' + typeof(endereco) + '\n');
console.log((Array.isArray(endereco)) ? 'Array' : 'Não é array');