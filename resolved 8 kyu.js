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