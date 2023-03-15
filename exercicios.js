const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number' )
        return 'Não é um número';
    if ( typeof entrada % 3 === 0 && entrada % 5 === 0 )
        return 'FizzBuzz';    
    if ( typeof entrada % 3 === 0 )
        return 'Fizz';
    if ( typeof entrada % 5 === 0 )
        return 'Buzz';
}
