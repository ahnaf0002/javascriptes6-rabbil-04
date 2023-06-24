
class Person{
    firstName = "John";
    lastName = "Doe";
    age = 34;

    getName = ()=>{
        return this.firstName + " " + this.lastName;
    }
}

let a = new Person();
console.log(a.getName());