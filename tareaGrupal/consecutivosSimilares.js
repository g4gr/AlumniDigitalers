/*
Consecutivos similares
Debes crear una función llamada consecutivosSimilares que reciba un string y retorne cuantos consecutivos similares hay en un string. 
Ejemplo: 
consecutivosSimilares(AAAA) debe retornar 3
consecutivosSimilares(BBBBB) debe retornar 4
consecutivosSimilares(ABABABAB) debe retornar 0
consecutivosSimilares(BABABA) debe retornar 0
consecutivosSimilares(AAABBB) debe retornar 4
*/

function consecutivosSimilares(string) {
    let consecutivo = 0;
    
    for (i = 0; i <= string.length; i++) {
        if (string[i] == string[i + 1]) {
            consecutivo++
            console.log(consecutivo)
        }
    }
}

consecutivosSimilares("AAAA")
consecutivosSimilares("BBBBB")
consecutivosSimilares("ABABABAB")
consecutivosSimilares("BABABA")
consecutivosSimilares("AAABBB")