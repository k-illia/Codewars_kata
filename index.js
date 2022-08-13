function collatz(n) {
    for (let i; n % 2 == 0; n / 2 ) { if (n % 2 != 0) {
        return n * 3 +1
    }
    return n
    }
}


console.log(collatz(5))