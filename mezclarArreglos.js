/*
Mezclar arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

Ejemplo: 
mezclarArreglos([1,2,3,4],["h","o","l","a"]) debe retornar [1, "h", 2,"o", 3,"l",4,"a"]
mezclarArreglos([1,2,3,4], ["h","p"]) debe retornar [1, "h", 2, "p", 3 , 4]
mezclarArreglos(["h","p"], [1,2,3,4]) debe retornar ["h", 1, "p", 2, 3 , 4]
*/

function mezclarArreglos (arr1,arr2) {
    let resultado = [];
    let mayor = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < mayor; i++) {
        if (i < arr1.length) {
            resultado.push(arr1[i]);
        }
        if (i < arr2.length) {
            resultado.push(arr2[i]);
        }
    }
        console.log(resultado);
}

mezclarArreglos([1,2,3,4],["h","o","l","a"]);
mezclarArreglos([1,2,3,4], ["h","p"]);
mezclarArreglos(["h","p"], [1,2,3,4]);