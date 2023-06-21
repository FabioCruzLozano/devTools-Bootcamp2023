// Escribe una función que acepte un array con 10 números enteros positivos
// (entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
// número de teléfono.
// ejemplo 
// createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-
// 7890"
// createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-
// 7249"


// function createPhoneNumber(numbers){
//     var phone = numbersjoin().replace(/\D/g,'');
//     var format = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
//     if (format) {
//         return `(${format[1]}) ${(format[2])}-${format[3]}`;
//     }
//     return phone;
// }


// console.log(createPhoneNumber(1112223333));

// function createPhoneNumber(number){
//     let numbers = number.length
//     if (numbers == 9){
//     console.log(numbers.splice(0, 0, "(") + ")" + numbers.splice(4, 0, ")") + " " + numbers.splice(9, 0, "-"))}
// else {
//     return "ingrese un numero telefonico de 10 digitos"
// }
// }

// console.log(createPhoneNumber("1234567890"));
 