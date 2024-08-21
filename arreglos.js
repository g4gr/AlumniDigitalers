/*
Arreglos
Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
2. “pop([1,2,3,4,5])” debe retornar 5
3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]
*/
/*
// 1. join
function join(arr, separator) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += separator;
        }
    }
    return result;
}

console.log(join([1,2,3,4,5], " "));
// 2. pop
function pop(arr) {
    let result = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return result;
}

console.log(pop([1,2,3,4,5]));
// 3. filter
function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([1,2,3,4,5], (e) => {return e % 2 === 0}));
// 4. map
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log(map([1,2,3,4,5], (e) => {return e * 10}));
*/
function similarMap (arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    console.log(result);
}

similarMap([1,2,3,4,5], (e) => {return e * 10});

function similarJoin (arr, separator) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += separator;
        }
    }
    console.log(result);
}

similarJoin([1,2,3,4,5], " ");