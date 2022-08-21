// //
// // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// //
// //     Examples:
// // spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// // spinWords( "This is a test") => returns "This is a test"
// // spinWords( "This is another test" )=> returns "This is rehtona test"
//
// function spinWords(string){
//     let  a =  string.split(" ")
//     let b = []
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].length > 5) {
//             b.push(a[i].split("").reverse().join(""))
//         }
//         else if (a[i].length < 5) {
//             b.push(a[i])
//         }
//     }
//     return b.join(" ")
// }
//
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }
//
// function spinWords(string){
//     return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }
//================================================================================================

// Цифровой корень — это рекурсивная сумма всех цифр числа.
//
//     Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.
//
//     Примеры
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//
// function digitalRoot(n) {
//
//     let result = n.toString().split("").reduce(function(previousValue, currentValue) {
//         return Number(previousValue) + Number(currentValue)})
//     if (result > 9) {
//         return digitalRoot(result)
//     } else {
//         return result
//     }
// }
//
// console.log(digitalRoot(0))
//
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }
//
// function digital_root(n) {
//     if (n < 10) return n;
//
//     return digital_root(
//         n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }
//================================================================================================
