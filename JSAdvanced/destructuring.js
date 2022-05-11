let numbers = [4, 5, 5, 7, 8];

let [n1, n2, n3, n4] = numbers;

// let n1 = numbers[0]
// let n2 = numbers[1]
// let n3 = numbers[2]
// let n4 = numbers[3]
// let n5 = numbers[4]

// console.log(n1, n2, n3, n4)

let khoa = {
    fullname: "khoa",
    age: 18,
    gender: true,
    greeting: function () {
        return `Hello world`
    }
}


let { fullname, gender, greeting } = khoa;
// console.log(greeting())

function sum(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i]
    }
    return { length: rest.length, total: total };
}

// let {length, total} = sum(7,4,5,6,6,6,3,2,2,3,4,6,7)
let { ...result } = sum(7, 4, 5, 6, 6, 6, 3, 2, 2, 3, 4, 6, 7)
console.log(result.length)
console.log(result.total)