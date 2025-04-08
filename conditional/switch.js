var a = parseInt(prompt("Enter first number :"))
var b = parseInt(prompt("Enter secodn number :"));


var choice = prompt("1 for add \n2 for sub \n3 for mul \n4 for div \n\n\nEnter your choice:")

switch(choice){
    case "1": console.log("Addition = ",a+b);
            break;

    case "2" : console.log("Subtract = ",a-b);
            break;

    case "3" :
            console.log("Multiply = ",a*b);
            break;

    case "4" :
            console.log("Division = ",a/b);
            break;
    default:
        console.log("wrong..");
        
    
    
}