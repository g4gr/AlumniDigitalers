function validarPrefijo(parametro) {
    let prefijos = [54, 55, 56, 57, 58]
    let paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
    
    if(typeof parametro !== "string"){

        let objeto = {}

        for (let i = 0; i < prefijos.length; i++) {
            objeto[prefijos[i]] = paises[i];
        }

        let numPasado = parametro.toString();
        let prefijo = numPasado.slice(0,2);

        switch (prefijo) {
            case '54':
                console.log(`Este número pertenece a ${objeto[54]}`)
                break;
            case '55':
                console.log(`Este número pertenece a ${objeto[55]}`)
                break;
            case '56':
                console.log(`Este número pertenece a ${objeto[56]}`)
                break;
            case '57':
                console.log(`Este número pertenece a ${objeto[57]}`)
                break;
            case '58':
                console.log(`Este número pertenece a ${objeto[58]}`)
                break;
        
            default:
                console.log('El número no pertenece a nuestros países')
                break;
        }
    } else if (typeof parametro !== 'number') {
        let objeto = {}
        
        for (let i = 0; i < paises.length; i++) {
            objeto[paises[i]] = prefijos[i];
        }

        let num = parametro.toString()
        let pais = num.toLowerCase()

        switch (pais) {
            case 'argentina':
                console.log(`El prefijo: ${objeto['argentina']}, pertenece a Argentina`)
                break;
            case 'brasil':
                console.log(`El prefijo: ${objeto['brasil']}, pertenece a Brasil`)
                break;
            case 'chile':
                console.log(`El prefijo: ${objeto['chile']}, pertenece a Chile`)
                break;
            case 'colombia':
                console.log(`El prefijo: ${objeto['colombia']}, pertenece a Colombia`)
                break;
            case 'venezuela':
                console.log(`El prefijo: ${objeto['venezuela']}, pertenece a Venezuela`)
                break;
        
            default:
                console.log('El número no pertenece a nuestros países')
                break;
        }
    } else {
        console.log("coloque el codigo o le nombre de un pais");
        console.log(typeof parametro) 
    }

}
validarPrefijo('Argentina')
validarPrefijo('Brasil')
validarPrefijo('Chile')
validarPrefijo('Colombia')
validarPrefijo('Venezuela')
validarPrefijo(54)
validarPrefijo(55)
validarPrefijo(56)
validarPrefijo(57)
validarPrefijo(58)
validarPrefijo(1)
validarPrefijo('sdfgdfs')
validarPrefijo(4)