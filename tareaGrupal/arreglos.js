//Arreglos
// Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
// 1. “join([1,2,3,4,5], “ ")" debe retornar “1 2 3 4 5"
// 2. “pop([1,2,3,4,5])" debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})" debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})" debe retornar [10, 20, 30, 40, 50]

function similarJoin(arr, separador){
    let resultado = '';

    for (let i = 0; i < arr.length; i++){
        resultado += arr[i];
        if (i < arr.lenght -1) {
           resultado += separador;
        }
    }
   return resultado;
}

console.log(similarJoin([1, 2, 3, 4, 5], ' '));


function similPop(arr) {
    if (arr.length === 0) {
        return undefined;
     }
     let ultimoElemento = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return ultimoElemento;
}

console.log(similPop([1,2,3,4,5]));


function similarfilter (arr){
   let resultado = [];

   for (let i = 0; i <= arr.lenght; i++) {
       if (arr[i]%2===0) {
           console.log(i)
           resultado.push(i);
       }
   }
   return resultado;
}


console.log(similarfilter([1, 2, 3, 4, 5]));


function similarmap(arr,callback){
   let resultado = [];

 for (let i = 0; i < arr.length ; i++) {
    resultado.push(callback(arr[i]));

  }
    return (resultado);
}

console.log(similarmap([1,2,3,4,5,6], (e) => {return e * 10}));