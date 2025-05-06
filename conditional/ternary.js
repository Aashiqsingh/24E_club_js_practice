let a = 18;
let b = 17;
let c = 16;

// var ans = a > b ? "A is gretter" : "B is gretter"
// console.log(ans);


// a > b ? console.log("A is gretter") : console.log("B is gretter");

// var ans = a > b ? a : b
// console.log(ans + " is gretter");



// let a = 9, b = 8, c = 10;
// let big = (a > b && a > c) ? a : (b > c) ? b : c;
// console.log("Greatest:", big);


var ans = a > b ? (a > c ? a : c) :( b > c ? b : c)

console.log(ans);
