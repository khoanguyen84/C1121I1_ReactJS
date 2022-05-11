// 1. Decleration function
console.log(sum(5,7))
console.log(sum(15,17))
function sum(n1, n2) {
    return n1 + n2;
}
// 2. Expression function
const subtract = function (n1, n2) {
    return n1 - n2;
}
console.log(subtract(7,5))
console.log(subtract(17,15))
// 3. Anonymous function/ callback function
let numbers = [1, 2, 3, 4, 5, 6, 6]
let result = numbers.reduce(function (total, number){
    return total + number;
})
// 4. khai báo 1 class
function Student(fullname, age){
    this.fullname  = fullname;
    this.age = age;
    // 5. khai báo 1 method trong class
    this.info = function(){

    }
}

// class
class Staff{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }
    info(){

    }
}