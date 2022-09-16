// // Given an array of integers.
// //
// //     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// //
// //     If the input is an empty array or is null, return an empty array.
// //
// //     Example
// // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// //
//
// function countPositivesSumNegatives(input) { if (input == null) { return []}
//     let filtered = input.filter(Boolean)
//     let sum = []
//     let sumPositive = 0
//     let sumNegative = 0
//     for (let i = 0; i < filtered.length; i++) {
//         if (filtered[i] < 0) {
//             sumNegative += filtered[i] }
//
//         else {
//             sumPositive++
//         }
//     }
//     if (sumPositive == 0 && sumNegative == 0) {
//         return []
//     } else {
//         sum.push(sumPositive, sumNegative)
//         return sum
//     }}
//
//  console.log(countPositivesSumNegatives(null))
// =======================================================================================================================================
// function maps(x){
//     let b = []
//     for (let i = 0; i < x.length; i++) {
//
//         b.push(x[i]*2)
//
//     }
//     return b
// }
// console.log(maps([2,2,2,7]))
// =======================================================================================================================================
// // В вашем классе был тест, и вы его прошли. Поздравляем!
// //     Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// //
// //     Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!
// //
// //     Вернись True, если тебе лучше, иначе False!
// //
// //     Примечание:
// // Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!
//
// function betterThanAverage(classPoints, yourPoints) {
//     let b = classPoints.reduce(function(a, b) { return (a + b) / 2 })
//     return b < yourPoints
// }
//
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) )
// =======================================================================================================================================
// Write a function "greet" that returns "hello world!"
// function greet() {
//     return "hello world!"
// }

// function capitalizeWord(word) {
//     let b = word[0].toUpperCase() + word.slice(1) ;
//     return b;
// }
//
// console.log(capitalizeWord("hello"))
// =======================================================================================================================================
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
//
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
//
// function toBinary(n){
//     return +(n).toString(2)
// }
// =======================================================================================================================================
// function digits(n) {
//     return n.toString().length
// }
//
// console.log(digits(12))
// // =======================================================================================================================================
// function mergeArrays(arr1, arr2) {
//
//     let b =  arr1.concat(arr2).sort(function(a, b) {
//         return a - b;
//     })
//     return b.reduce((prev, cur) => (prev.indexOf(cur) === -1) ? [...prev, cur] : prev, [])}
//
// console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
// // =======================================================================================================================================
// Возвращает длину самого длинного слова в предоставленном предложении.
//
//     Ваш ответ должен быть числом.
// function findLongestWordLength(str) {
//     let a = str.split(" ")
//     let findMax = []
//     for (let i = 0; i < a.length; i++) {
//         findMax.push(a[i].length)
//     }
//     return findMax.sort(function(a, b) {
//         return b - a
//     })[0]
// }
//
// function findLongestWordLength(s) {
//     return s.split(' ')
//         .reduce(function(longest, word) {
//             return Math.max(longest, word.length)
//         }, 0);
// }
//
//
// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map(word => word.length));
// }
// //=======================================================================================================================================
