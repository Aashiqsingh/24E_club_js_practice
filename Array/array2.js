var users = ["dharmi","het","bhuwan","priya","rahul","pukar","payal"]





var deleteUser = users.filter((user)=>{
    return user != "dharmi"
})

console.log(deleteUser);







// users.forEach((user)=>{
//     console.log(user.toUpperCase());
    
// })


// map : it will return new array with same length


// let x = users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(x);

// let y = users.map((user)=>{
//     return user.length > 4
// })

// console.log(y);


// filter : it will return new array with modified data


// let x = users.filter((user)=>{
//     return user.length > 4
// })

// console.log(x);
