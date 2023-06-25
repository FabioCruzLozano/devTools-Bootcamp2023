// Escribe una función que acepte un array con 10 números enteros positivos
// (entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
// número de teléfono.
// ejemplo 
// createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-
// 7890"
// createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-
// 7249"


function createPhoneNumber(numbers){
    if (numbers.length !== 10) {
        return "El numero ingresado debe ser de 10 digitos";
    }

    let formatoNumeros = "(";
    for (let i = 0; i < numbers.length; i++) {
        if (i === 3) {
            formatoNumeros += ") ";
        } else if (i === 6) {
            formatoNumeros += "-";
        }
        formatoNumeros += numbers[i];
    }
    return formatoNumeros;
}

console.log(createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]))