// 1. phải là 1 hàm
// 2. phải truyền vào 1 hàm khác như 1 tham số
// 3. phải được thực thi

function callback(n1, n2) {
    return n1 + n2;
}


// function useCallback(param) {
//     console.log(param(5, 7));
// }


// useCallback(function(n1, n2){
//     return n1  + n2
// });

// console.log(useCallback(callback))