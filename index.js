console.log('Ola, mundo!');

let nome = 'David';
let idade = 29
let altura = 1.69

console.log(nome, ' tem ', idade);
console.log(nome + ' tem ' + idade + ' anos e ' + altura + ' de altura.');
console.log(`Nome: ${nome} - idade: ${idade} - altura: ${altura}`);

console.log('O nome e David?' + (nome === 'David') ? 'Sim' : 'Não');

console.log(
    'vNome: ' + typeof(nome) + '\n' + 
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n'
);

let endereco = {
    "rua": "Brasil",
    "num": 108,
    "bairro": "centro",
    "cidade": "tupa",
    "uf": "SP",
    "mora": true

}

console.log(endereco)

console.log(
    'vEndereco: ' + typeof(endereco) + '\n'
);