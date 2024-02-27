let entrada = require('prompt-sync')();
let idade;
//let num = parseInt(entrada('Digite um número para visualizar a tabuada!'));
//let cont = 1;

// while(cont <= 10) {
//     let calc = num * cont;
//     console.log(`${num} x ${cont} = ${calc}`);
//     cont++;
// }

// for(cont; cont <= 10; cont++) {
//     let calc = num * cont;
//     console.log(`${num} x ${cont} = ${calc}`);    
// }

// idade = entrada('Digite sua idade: ');

// if(idade < 18) {
//     console.log('Menor')
// } else if(idade === 18) {
//     console.log('Tem 18')
// } else {
//     console.log('Maior')
// }

const senha = '123456';
let cont = 0;

for(cont; cont < 3; cont++) {
    senhaDig = entrada('Digite a senha para acessar o sistema: ');

    if(senha == senhaDig) {
        console.log('Bem vindo!');
        break;
    }

} 

if(cont === 3) {
    console.log("Acesso negado!");
}



// do {

//     if(cont === 3){
//         break;
//     }

//     cont++;
//     senhaDig = entrada('Digite a senha para acessar o sistema: ');

// } while(senha !== senhaDig);

// if(cont >= 3) {
//     console.log('Acesso nao autorizado!')

// } else {
//     console.log('Acesso autorizado!')
// }