//Ejercicio #4
// FizzBuzz
// Tu tarea es escribir un programa que recorra los números del 1 al n. Para cada número:
// Si el número es divisible por 3, debes imprimir "Fizz".
// Si el número es divisible por 5, debes imprimir "Buzz".
// Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
// Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.
// Para lograrlo debes implementar una función llamada fizzBuzz(n), que tome como
// parámetro un número entero n y ejecute el juego FizzBuzz.

const FizzBuzz = (n) => {
    //primero se reviso que se cumplieran las dos condiciones, ya que cuando el programa valida primero la condicion 1- fizz o 
    //la condicion 2 buzz esta las toma y no tiene en cuenta la condicion 3 fizzbuzz ( inicialmente se habia puesto al ultimo pero no era
    // tomada la condicion asi que fue necesrio ponerla de primera.)
    for (let numero = 1; numero <= n; numero++) {
        if (numero % 3 == 0 && numero % 5 == 0) {
            console.log(numero + " FizzBuzz")
        } else if (numero % 5 == 0) { // se valido que si un numero modulo de 5 (es decir si un numero al ser divido por 5 su residuo es 0) imprima Buzz
            console.log(numero + " Buzz")
        } else if (numero % 3 == 0) { // se valido que si un numero modulo de 3 (es decir si un numero al ser divido por 3 su residuo es 0) imprima Fizz
            console.log(numero + " Fizz")
        } else { // si no cumple con ninguna de las funciones retorna el numero
            console.log(numero)
        }
    }
}
console.log(FizzBuzz(90))
