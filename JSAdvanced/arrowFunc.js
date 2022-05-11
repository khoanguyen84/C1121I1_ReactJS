// 2. Expression function
// const subtract = function (n1, n2) {
//     return n1 - n2;
// }
const subtract = (n1, n2) => n1 - n2;

// const logger = function(msg){
//     console.log(msg)
// }
const logger = (msg) => console.log(msg);
// logger("Hello world")
// const hello = function(){
//     console.log("Hello everyone!")
// }
const hello = () => console.log("Hello everyone!")

// const isPrime = function(number){
//     let flat = true;
//     for(let i = 2; i<= Math.sqrt(number); i++){
//         if(number % i == 0){
//             flat = false;
//             break;
//         }
//     }
//     return flat;
// }
const isPrime = (number) => {
    let flat = true;
    for(let i = 2; i<= Math.sqrt(number); i++){
        if(number % i == 0){
            flat = false;
            break;
        }
    }
    return flat;
}
console.log(isPrime(60))
// 3. Anonymous function/ callback function
let numbers = [1, 2, 3, 4, 5, 6, 6]
// let result = numbers.reduce(function (total, number){
//     return total + number;
// })
let result = numbers.reduce((total, number) => total + number)