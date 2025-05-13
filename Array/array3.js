let language = ["hindi","english","spanish","french","german","russian","arabic"]





const deleteLang = (langName)=> language.filter((lang)=>lang != langName)
let x = deleteLang("hindi")
console.log(x);











// const deleteLang = (langName)=>{

//     return language.filter((lang)=>lang != langName)
// }


// let x = deleteLang("spanish")
// console.log(x);











// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })
// }


// let x = deleteLang("german")
// console.log(x);













// const deleteLang = (langName)=>{

//     let x = language.filter((lang)=>{
//         return lang != langName
//     })


//     return x;
// }


// let x = deleteLang("french")
// console.log(x);
