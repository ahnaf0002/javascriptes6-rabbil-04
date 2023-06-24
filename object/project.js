
let Person = {
   firstName: 'John',
   lastName: 'Doe',
   age:36,
   getName:()=>{
    return Person.firstName + ' ' + Person.lastName;
   },
   city: ['Dhaka',"CTG"]
}

console.log(Person.city[0]);