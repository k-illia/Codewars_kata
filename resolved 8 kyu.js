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
// function largestOfFour(arr) {
//     let b = []
//     for(let i = 0; i <arr.length; i++) {
//         b.push(Math.max.apply(null, arr[i]))
//     }
//
//     return b
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [1000, 1001, 857, 1], [32, 35, 37, 39]]));
// //=======================================================================================================================================
// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target
// }
//
// confirmEnding("Bastian", "n");
//
// Код Пояснение
// Если в качестве первого параметра задано отрицательное число slice(), смещение берется назад от конца строки.
// //=======================================================================================================================================
// // Повторить заданную строку str(первый аргумент) несколько numраз (второй аргумент). Возвращает пустую строку, \
// // если numне является положительным числом. Для целей этой задачи не используйте встроенный .repeat()метод.
//
// function repeatStringNumTimes(str, num) {
//     let result =  ""
//     let b = 1
//     if (num <= 0) {
//         return ""
//     }
//     do {
//         result += str
//         b++
//     }
//     while (b <= num)
//
//     return result
// }
//
// console.log(repeatStringNumTimes("abc", 3))
//
// function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }
// //=======================================================================================================================================
// function truncateString(str, num) {
//     let truncate = str.slice(0, num)
//     if (truncate.length < 43) {
//         return truncate + "..."
//     }
//     else {
//         return truncate
//     }
//
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// //=======================================================================================================================================
// Создайте функцию, которая просматривает массив arrи возвращает первый элемент в нем, прошедший «проверку на истинность». Это означает,
//     что для данного элемента x«проверка на истинность» пройдена, если func(x)есть true. Если ни один элемент не прошел тест, верните undefined.
//
//     Тесты
// Ожидание :findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })должен вернуться 8.
// Ожидание :findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })должен вернуться undefined.

// function findElement(arr, func) {
//     arr.sort((a,b) => a-b)
//     let b = 0
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//             b++
//             break
//         }
//     }
//     if (b === 0) {
//         console.log(undefined)
//     }
// }
//
// findElement([1, 3, 3, 1], num => num % 2 === 0);
// //=======================================================================================================================================
// function booWho(bool) {
//     if (typeof bool === 'boolean') {
//         console.log('✅ type is boolean');
//     } else {
//         console.log('⛔️ type is NOT boolean');}
// }
//
// booWho(null);
// //=======================================================================================================================================
// function titleCase(str) {
//     let a = str.toLowerCase().split(" ")
//     let b = []
//     for (let i = 0; i < a.length;i++) {
//         b.push(a[i][0].toUpperCase() + a[i].slice(1))
//     }
//     console.log(b.join(' '))
// }
//
// titleCase("I'm a Little tea pot");
// //=======================================================================================================================================
