// Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
//    MY
//
// function oddOrEven(array) {
//     let sum = 0
//
//     for (let i = 0; i < array.length; i++) {
//
//         sum = sum + array[i]
//     }
//     let result = (sum % 2 == 0) ? "even" : "odd"
//     return result
// }
//
// BEST
//
// function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }
//===========================================================================================================================================================================
// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
//
//     Примеры ввода/вывода:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//    MY
// function XO(str) {
//     let a = str.toLowerCase()
//     let counter = 0;
//     let signa = 0
//     for (let elem of a) {
//         if (elem == "x") {
//             counter++
//         }
//     }
//     for (let elem of a) {
//         if (elem == "o") {
//             signa++
//         }
//     }
//     return  counter == signa
// }
// BEST
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }
//
// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }
//
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }
//
// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }

//===========================================================================================================================================================================
       