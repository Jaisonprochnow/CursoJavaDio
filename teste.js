//function soma(a, b) {
//    console.log(a + b);
//    return a + b;
//}

//soma(1, 2);

//console.log('Hello World')

/*function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log(`Os números pares são: ${evenNums}`);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);*/

//Operadores

function comparaNumeros(a, b) {
    (a === b ? console.log('Os números são iguais, ') : console.log('Os números são diferentes, '))
    var res = a + b;
    console.log(`sua soma é ${res}`);
    (a + b > 10 ? console.log('que é maior que 10') : console.log('que é menor que 10'));
    (a + b < 20 ? console.log('que é menor que 20') : console.log('que é maior que 20'));

}
comparaNumeros(8, 8);