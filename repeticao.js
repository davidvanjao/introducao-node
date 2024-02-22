let entrada = require('prompt-sync')();
let idade;
let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));
let cont = 1;

// while(cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} x ${cont} = ${calc}`);
//     cont++;
// }

for(cont; cont <= 10; cont++) {
    let calc = num * cont;
    console.log(`${num} x ${cont} = ${calc}`);    
}

// idade = entrada('Digite sua idade: ');

// if(idade < 18) {
//     console.log('Menor')
// } else if(idade === 18) {
//     console.log('Tem 18')
// } else {
//     console.log('Maior')
// }