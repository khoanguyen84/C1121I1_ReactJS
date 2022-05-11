// export default function sum(...rest){
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total += rest[i]
//     }
//     return total;
// }
// export function multiple(...rest){
//     let total = 1;
//     for (let i = 0; i < rest.length; i++) {
//         total *= rest[i]
//     }
//     return total;
// }
// export function subtract(...rest){
//     let total = 0;
//     for (let i = 0; i < rest.length; i++) {
//         total -= rest[i]
//     }
//     return total;
// }

let myMath = {
    sum: function (...rest){
        let total = 0;
        for (let i = 0; i < rest.length; i++) {
            total += rest[i]
        }
        return total;
    },
    multiple: function(...rest){
        let total = 1;
        for (let i = 0; i < rest.length; i++) {
            total *= rest[i]
        }
        return total;
    },
    subtract: function (...rest){
        let total = 0;
        for (let i = 0; i < rest.length; i++) {
            total -= rest[i]
        }
        return total;
    }
}
export default myMath