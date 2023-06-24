
class Person {
    static firstName = "John";
    static lastName = "Doe";
    age = 34;

    
    static getName() {
        return this.firstName + " " + this.lastName;
      }

    static city = ['Dhaka','Barisal']
}

 
console.log(Person.getName()); 