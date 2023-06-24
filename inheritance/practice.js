

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
    
}

let son = new Son();

console.log(son.addTwo());