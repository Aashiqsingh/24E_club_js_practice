function lasvegas(option){

    return option.name + " your tour confirm in lasvegas with package "+ option.amount
}

function singapore(option){
    return option.name + " your tour confirm in singapore with package "+ option.amount

}

function goa(option){
    return option.name + " your tour confirm in goa with package "+ option.amount

}

var budget = "5000";
var temp;


if(budget > 4000)
{
    temp = lasvegas({name:"dhwarmi",amount:budget})
}
else if (budget > 3000)
{
    temp = singapore({name:"parva",amount:budget})
}
else if(budget > 2000){
    temp = goa({name:"vyom",amount:budget})
}

console.log(temp);
