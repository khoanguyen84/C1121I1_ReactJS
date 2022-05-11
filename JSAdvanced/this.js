class Student{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }

    getFN(){
        return this.fullname;
    }
}

let khoa = new Student("Khoa", 18)
let dung = new Student("Dung", 18)
console.log(khoa.getFN())
console.log(dung.getFN())