// holds 
var name = "Anita"
let person = {
    name:"John",
    age:20,
    gender:"female",
    // is a property whose value is a method
    hobby: function(activity){
        // or
    // hobby :(activity) =>'I love ${activity}'
        // return 'My name is ${name} and I love ${activity}'
        return 'My name is ${this.name} and I love ${activity}'
    }
}
// can use indexing or dot
// dot
console.log(person.hobby("coding"));
console.log(person.gender);
let student = Object.create(person);
student["name"]="Mary"
student.age = 25
console.log(student.age);

console.log(person.gender);
// key & value
person.country = "Kenya"
//indexing
person["nationality"] = "Kenyan"
console.log(person);