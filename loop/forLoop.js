// for(let i=1;i<=5;i++)
// {

//     console.log(i);
    
// }


// let num = 1234;
// let rev = 0;

// for(;num !=0;){
//     let rem = num % 10;
//     rev = rev * 10 + rem 
//     num = Math.floor(num / 10);

// }

// console.log("reverse ...",rev);


let num = 17;
let flag = 0;

for(let i=2;i<num;i++)
{
    if(num % i == 0)
    {
        flag = 1;
    }
}

if(flag == 1)
{
    console.log(num + " is not prime");
    
}
else{
    console.log(num + " is prime number");
    
}