

class father{

    firstName = "Jamir";
    lastName = "Hossain";

    addTwo(){
        let a = 10;
        let b = 20;

        console.log(a+b);
    }
}

class Son extends father {
    addTwo(){
        let a = 10;
        let b = 20;

        console.log(a*b);
    }
}
 
let bon = new Son();

console.log(bon.addTwo());
 