// rest
// function sum() {
//     // console.log(arguments)
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i]
//     }
//     return total;
// }
// function sum(message, ...rest) {
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i]
//     }
//     return `${message}: ${total}`;
// }
function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return total;
}

// console.log(sum("Tổng cộng", 5, 5, 6, 7, 7, 8, 8, 6, 5, 4, 4, 4))

// pass by value: kiểu tham trị
// pass by reference: kiểu tham chiếu (object, function)

// spread
let numbers_1 = [3, 4, 5, 6, 7, 6]

console.log(sum(...numbers_1));
// let numbers_2 = numbers_1;
let numbers_2 = [...numbers_1]
numbers_2[1] = 40;
// console.log(numbers_1)
let staff_1 = {
    fullname: "Khoa",
    agender : true
}

// let staff_2 = staff_1;
// let staff_2 = {...staff_1};
// staff_2.fullname = "trường"
let staff_2 = {
    email: "khoa@gmail.com",
    phoneNumber: "0935216417"
}

let staff_3 = {
    ...staff_1,
    ...staff_2
}

let staff_4 = {
    ...staff_1,
    avatar : "link avatar"
}
// console.log(staff_4)