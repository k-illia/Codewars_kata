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
