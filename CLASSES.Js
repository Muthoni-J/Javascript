class Student{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender

    }
}
 let studentEphy = new Student("Ephy",21,"female");
 console.log(studentEphy);
 
//  Student.prototype.nationality = "Kenyan"
//  console.log(studentEphy.nationality);
//   or

// protype adds a method
Student.prototype.nationality = function(nationality){
    return 'I am ${nationality}'
}
console.log(studentEphy.nationality("Kenyan"));

// function constructor
function Student(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender

}
let student = new Student("Jane",23,"female")
 console.log(student);
    