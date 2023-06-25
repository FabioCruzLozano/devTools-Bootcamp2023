// Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La X debe tener un tamaño variable
// según el número ingresado.
// Debes implementar una función llamada drawX(tamano), donde el parámetro tamano es un número entero y dibuje la X
// correspondiente.

const drawX = (tamano) => {
    for (let i = 0; i < tamano; i++) {
        let linea = "";
        for (let asterist = 0; asterist < tamano; asterist++) {
            if (asterist === i|| asterist === tamano - asterist - 1) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
};

drawX(11);