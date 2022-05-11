// IIFE = Immediately Invoked Function Expression
function sum(n1, n2) {
    console.log(n1 + n2);
}

sum(5,7)

!(function sum(n1, n2) {
    console.log(n1 + n2);
})(5,7)

;(function (n1, n2) {
    console.log(n1 + n2)
})(5, 7)

// console.log((function test() { }))

