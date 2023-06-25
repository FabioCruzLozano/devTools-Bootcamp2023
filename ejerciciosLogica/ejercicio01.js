//crear una funcion llamada next_pal() que reciba como parametro un numero entero positivo, el objetivo es que la funcion retorne el siguiente numero palindromo a partir del recibido  por parametro.


function next_palindromo(numero) {
    numero = numero + 1;

    while (true) {
        //toString pasa un tipo number a un tipo string
        const numString = numero.toString();

        //el split divide cada digito (el cual ya se encuentra convertido en un sting) jemplo 6 8 9
        //el reverse da vuelta al numero como su nombre lo indica lo revierte
        //el join vuelve y junta los digitos
        //finalmente si el numero se lee igual de reversa entonces imprime el numero
        if (numString === numString.split("").reverse().join("")) {
            return parseInt(numString);
        } else {
            numero = numero + 1;
        }
    }
}
//de lo contrario que retorne un ciclo que siga aumentando hasta que se encuentre de nuevo un palindromo y lo imprima
// for(let i = 0; i < 9999999; i++); 

console.log(next_palindromo(112));
