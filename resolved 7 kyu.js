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
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
//
//     Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// то есть
//
// function friend(friends){
//     let myFriends = []
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length ==  4) {
//             myFriends.push(friends[i])
//         }
//     } return myFriends
// }
//
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
//
// best
//
// function friend(friends){
//     return friends.filter(n => n.length === 4)
// }
//
//
// const friend = friends => friends.filter(friend => friend.length == 4);
// //===========================================================================================================================================================================
// // Возьмите 2 строки s1и s2 включите только буквы от aдо z. Возвращает новую отсортированную строку,
// //     максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// //
// //     Примеры:
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"
// //
// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//
// function longest(s1, s2) {
//     let sum = s1.concat(s2).split("").sort()
//     let uniq = Array.from(new Set(sum))
//
//     return uniq.join('')
// }
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
//
// console.log(longest(a, b))
//
// BEST
//
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//
//
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('');
// }
// //===========================================================================================================================================================================
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//
// function solution(str, ending){
//     console.log(str.slice(3))
//     let leng = ending.length
//     if (str.slice(-leng) === ending) {return true}
//     else if (ending === "") {return true}
//     else {return false}
// }
//
//
// function solution(str, ending){
//     return str.endsWith(ending);
// }
//
//
// console.log(solution('abc', ''))
// //===========================================================================================================================================================================
