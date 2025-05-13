// var student = {
//     id:1,
//     name:"dharmi",
//     age:20,
//     email:"dharmi@gmail.com",
//     gender:"female"
// }

// console.log(student);

// console.log(typeof student);

// console.log(student.name);
// console.log(student.email);
// console.log(student.gender);




var product = {
    id:1,
    name:"samsung",
    price:1000,
    discount:10,
    category:"electronics",
    brand:"samsung",
    description:{
        ram:"16gb",
        screen:"5.5",
        cpu:"i7"

    },
    color:["black","white","green"]

}

console.log(product);
console.log(product.name);

console.log(product.description);
console.log(product.description.ram);

console.log(product.color);
console.log(product.color[0]);


for(let i=0;i<product.color.length;i++){
    console.log(product.color[i]);
    
}





