class Student{
    constructor(fullname, age, gender){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }

    getAge(){
        return this.age;
    }
}

let truong = new Student("trường", 18, true)

// console.log(truong.getAge())
Student.prototype.getGender = function(){
    return this.gender;
}
// console.log(truong.getGender())


// console.log(new Array())
Array.prototype.sum = function(){
    // console.log(this)
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i]
    }
    return total;
}
let numbers = [3,5,6,3,3,22,5]
// numbers.sum();


if(Array.prototype.includes != 'function'){
    Array.prototype.includes = function(value){
        for(var i = 0; i < this.length; i++){
            if(this[i] == value)
                return true;
        }
        return false;
    }
}

console.log(numbers.includes(5))
