function confirmEnding(str, target) {
 let b = target.toString()
    console.log( /$/.test(str) )
}

confirmEnding("Bastian", "n");
let str1 = "Mary had a little lamb";
console.log( /^Mary/.test(str1) ); // true