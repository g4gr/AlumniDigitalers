/*
Rotación de arreglo a la derecha
Debes crear una función llamada rotar que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
Ejemplo: 
rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
*/

function rotar(arreglo, numero) {
    const nuevoArreglo = [];
    const arregloMenosNumero = arreglo.length - numero;

    for (let i = arregloMenosNumero; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i]);
    }

    for (let i = 0; i < arregloMenosNumero; i++) {
        nuevoArreglo.push(arreglo[i]);
    }

    console.log(nuevoArreglo);
}

rotar([1, 2, 3, 4, 5], 2);
rotar([1, 2, 3, 4, 5], 3);