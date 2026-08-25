let b = 10;


// Closure
function greet(){
    let a = 20;
    let b = 30;
    
    function meet(){    //closure: passes self refernce as well as reference of all the variables of the outer scope it uses
        console.log(a);
        console.log(b);
    }

    return meet;
}
 

const num = greet();//here the reference of the meet is passed(along with the reference of other variables it uses)
num();

